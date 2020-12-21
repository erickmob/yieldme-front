<template>
    <!-- HEADER -->
    <v-app-bar
      app
      color="primary"
      flat
    >

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
          v-for="[url, text] in menus"
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
      ></v-avatar>
    </v-app-bar>

</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      menus: [
        ['/', 'Dashboard'],
        ['/myWallet', 'Carteira'],
        ['/targetWallet', 'Objetivo'],
        ['/updates', 'Updates'],
      ],
    }),
  }
</script>