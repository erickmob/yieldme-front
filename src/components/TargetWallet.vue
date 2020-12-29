<template>
  <v-card
    flat
    light
  >
    <v-subheader>Ações BR</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>


    <v-subheader>Fiis</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>

    <v-subheader>BDRs</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>

    <v-subheader>Stocks</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>

    <v-subheader>ETFs</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>


    <v-subheader>Cryptos</v-subheader>
    <v-card-text class="pt-0">
      <v-slider
        v-model="value"
        :rules="rules"
        label="Qual % ?"
        thumb-label="always"
        min="0"
        max="100"
      ></v-slider>
    </v-card-text>

    <v-btn color="primary"
        class="mr-4"
        @click="submit"
        >
        submit
    </v-btn>
    
    <v-btn color="gray" @click="clear">
        clear
    </v-btn>

  </v-card>
  
</template>