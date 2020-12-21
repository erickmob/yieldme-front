<template>
  <v-app id="inspire">
    
    <!-- MENU ESQUERDA -->
    <SideMenu/>
    <Header/>


    <!-- MAIN -->
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
import Header from './components/Header'
import SideMenu from './components/SideMenu'

  export default {
    drawer: null,
    components: { Header, SideMenu },

  }
</script>