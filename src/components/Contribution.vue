<template>
    <v-card dark>

        <v-data-table
            :headers="headers"
            :items="assets"
            sort-by="calories"
            class="elevation-1"
        >
            <template v-slot:top>
            <v-toolbar
                flat
            >                
                <v-card-title>
                    <v-text-field
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                v-model="dialog"
                max-width="500px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    >
                    Adicionar Aporte
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="dateFormatted"
                                label="Date"
                                hint="DD/MM/YYYY format"
                                persistent-hint
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              no-title
                              @input="editedItem.date = false"
                            ></v-date-picker>
                          </v-menu>                 
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                          <v-autocomplete
                            v-model="editedItem.assetId"
                            :items="items"
                            :loading="isLoading"
                            :search-input.sync="search"
                            color="white"
                            hide-no-data
                            hide-selected
                            item-text="Description"
                            item-value="API"
                            label="Ticker"
                            placeholder="Start typing to Search"
                            return-object
                          ></v-autocomplete>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.amount"
                            label="Quantidade"
                            type="number"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.unitPrice"
                            label="Preço"
                            prefix="R$"
                            type="number"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.exchange"
                            label="Corretora"
                            ></v-text-field>
                        </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancelar
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        Salvar
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="headline">Tem certeza que deseja deletar esse Aporte?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
            <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
            </template>
            <template v-slot:no-data>
            <v-btn
                color="primary"
                @click="initialize"
            >
                Reset
            </v-btn>
            </template>
        </v-data-table>



    </v-card>
  
</template>
<script>
  import api from '../Api';
  export default {
    data: vm => ({
      menu1: null,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Data',
          align: 'start',
          sortable: false,
          value: 'date',
        },
        { text: 'Ticker', value: 'asset.ticker' },
        { text: 'Quantidade', value: 'amount' },
        { text: 'Preço', value: 'unitPrice' },
        { text: 'Corretora', value: 'exchange' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      assets: [],
      editedIndex: -1,
      editedItem: {
        amount: 0.00,
        assetId: '',
        date: new Date(),
        exchange: 0,
        totalPricePrice: 0,
        unitPrice: 0
      },
      defaultItem: {
        amount: 0.00,
        assetId: '',
        date: new Date(),
        exchange: 0,
        totalPricePrice: 0,
        unitPrice: 0
      },
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    mounted() {
      api.getAllContributions()
        .then(response => {
          console.log("Data loaded: ", response.data)
          this.assets = response.data
        })
        .catch(error => {
          console.log(error)
          this.error = "Failed to load todos"
        })
        .finally(() => this.loading = false)
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Adicionar aporte' : 'Editar aporte'
      },
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
      fields () {
        if (!this.model) return []

        return Object.keys(this.model).map(key => {
          return {
            key,
            value: this.model[key] || 'n/a',
          }
        })
      },
      items () {
        return this.entries.map(entry => {
          const Description = entry.ticker.length > this.descriptionLimit
            ? entry.ticker.slice(0, this.descriptionLimit) + '...'
            : entry.ticker

          return Object.assign({}, entry, { Description })
        })
      },      
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
      search (val) {
        console.log(val)

        if(val.length<2){
          return
        }
        // Items have already been loaded
        // if (this.items.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        api.getAllAssets(this.editedItem).then( (response) => {  
          // console.log("New item created:", response);  
          this.entries = response.data
        }).catch((error) => {  
          console.log(error);  
          this.error = "Failed to add todo"  
        });  
      },      
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.assets = [
          
        ]
      },

      editItem (item) {
        this.editedIndex = this.assets.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.assets.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.assets.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.assets[this.editedIndex], this.editedItem)
        } else {
          api.createNewContribution(this.editedItem).then( (response) => {  
            console.log("New item created:", response);  
            this.editedItem.date = this.formatDate(this.editedItem.date)
            this.assets.push(this.editedItem)
          }).catch((error) => {  
            console.log(error);  
            this.error = "Failed to add todo"  
          });  
            this.assets.push(this.editedItem)
        }
        this.close()
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>