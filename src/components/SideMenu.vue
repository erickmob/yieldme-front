<template>
    <!-- MENU ESQUERDA -->
    <v-navigation-drawer
      v-model="drawer"
      class="primary"
      app
    >
      <v-sheet
        color="primary"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div><strong class="white--text text--lighten-1">john@vuetifyjs.com</strong></div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list class="primary">
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
            <v-list-item-title><strong class="white--text text--lighten-1">{{ text }}</strong></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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