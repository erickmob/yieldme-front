<template>
  <div v-if="isLoggedIn">
    <v-app id="inspire">

      <!--SIDE MENU-->
      <v-navigation-drawer
        v-model="drawer"
        class="secondary"
        app
        dark
      >
        <v-sheet
          color="secondary"
          class="pa-4">
          
          <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="64"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>

          <div><span class="text--lighten-1">john@vuetifyjs.com</span></div>
        </v-sheet>

        <!-- <v-divider></v-divider> -->

        <v-list dark class="">
          <v-list-item-group
            
          >
            <v-list-item
              v-for="[icon, text, url] in menus"
              :key="icon"
              :to="url"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title ><span>{{ text }}</span></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <!-- HEADER -->
      <v-app-bar app 
        dense
        dark
        color="secondary">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
        ></v-avatar>

        <v-tabs
          centered
          class="ml-n9"
          color=""
        >
          <v-tab
            v-for="[icon, text, url] in menus"
            :key="url"
            :to="url"
          >
            <span class="">{{ text }}</span>
          </v-tab>
        </v-tabs>      

        <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
        >
        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      </v-app-bar>


      <!-- Main  -->
      <v-main class="tertiary">
        <v-main class="pl-0">
          <v-container> 
            <router-view/>
          </v-container>
        </v-main>        
      </v-main>
    </v-app>
  </div>
  <div v-else>
    <router-view/>
</div>
</template>

<script>
  export default {    
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          console.log(resolve)
          console.log(reject)
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('logout')
            
          }
          throw err;
        });
      });
    },

    data: () => ({ 
      drawer: null,
      menus: [
        ['mdi-desktop-mac-dashboard', 'Dashbord', '/'],
        ['mdi-cash-multiple', 'Aportes', '/contribution'],
        ['mdi-bullseye-arrow', 'Objetivo', '/targetWallet'],
        ['mdi-alert-octagon', 'Rebalancing', '/rebalancing'],
      ],
    }),
    
    
  }
</script>