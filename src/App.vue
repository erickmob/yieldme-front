<template>
  <v-app id="inspire">

    <!--SIDE MENU-->
    <v-navigation-drawer
      v-model="drawer"
      class="primary"
      app
    >
      <v-sheet
        color="primary"
        class="pa-4">
        
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>

        <div><strong class="white--text text--lighten-1">john@vuetifyjs.com</strong></div>
      </v-sheet>

        <!-- inicio alternativa 1 -->
        <!-- <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template> -->
        <!-- fim alternativa 1 -->

        <!-- inicio alternativa 2 -->
        <!-- <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

        </v-list-item> -->
        <!-- fim alternativa 2 -->

        <v-divider></v-divider>

        <v-list class="primary">
          <v-list-item
            v-for="[icon, text, url] in menus"
            :key="icon"
            :to="url"
            link
          >
            <v-list-item-icon>
              <v-icon color="orange darken-2">{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title><strong class="white--text text--lighten-1">{{ text }}</strong></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- HEADER -->
    <v-app-bar app 
      dense
      color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="[icon, text, url] in menus"
          :key="url"
          :to="url"
        >
          <strong class="white--text text--lighten-1">{{ text }}</strong>
        </v-tab>
      </v-tabs>      

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      >
      <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
      </v-avatar>
    </v-app-bar>


    <!-- Main  -->
    <v-main class="secondary">
      <v-content class="pl-0">
        <v-container> 
          <router-view> </router-view>
        </v-container>
      </v-content>        
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      menus: [
        ['mdi-desktop-mac-dashboard', 'Dashbord', '/'],
        ['mdi-align-vertical-bottom', 'Carteira', '/myWallet'],
        ['mdi-bullseye-arrow', 'Objetivo', '/targetWallet'],
        ['mdi-alert-octagon', 'Updates', '/updates'],
      ],
    }),
  }
</script>