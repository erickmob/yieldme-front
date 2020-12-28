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
                        v-model="search"
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
                    Adicionar Ativo
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
                            <v-text-field
                            v-model="editedItem.date"
                            label="Data"
                            type="date"
                            ></v-text-field>                            
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                            v-model="editedItem.ticker"
                            label="Tiker"
                            ></v-text-field>
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
                            v-model="editedItem.price"
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
                    <v-card-title class="headline">Tem certeza que deseja deletar esse ativo?</v-card-title>
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
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Data',
          align: 'start',
          sortable: false,
          value: 'date',
        },
        { text: 'Ticker', value: 'ticker' },
        { text: 'Quantidade', value: 'amount' },
        { text: 'Preço', value: 'price' },
        { text: 'Corretora', value: 'exchange' },
        { text: 'Corretora', value: 'actions', sortable: false },
      ],
      assets: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Adicionar ativo' : 'Editar ativo'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.assets = [
          {
            date: new Date(),
            ticker: 'ITSA4',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },
          {
            date: new Date(),
            ticker: 'VT',
            amount: 10,
            price: 9.25,
            exchange: 'Avenue',
          },{
            date: new Date(),
            ticker: 'MGLU3',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'XPML11',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'KNRI11',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'XPLG11',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'VILG11',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'KNRI11',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'MGLU3',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'ITSA4',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },{
            date: new Date(),
            ticker: 'BBDC',
            amount: 10,
            price: 9.25,
            exchange: 'XP',
          },
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
          this.assets.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>