<template>
  <v-data-table
    :headers="headers"
    :items="assets"
    item-key="name"
    sort-by="name"
    group-by="categoria"
    class="elevation-1"
    show-group-by
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Categoria',
            align: 'start',
            value: 'categoria',
            groupable: true,   
          },
          { text: 'Ativo', value: 'asset', align: 'right',groupable: false },
          { text: 'Qtd', value: 'qtd', align: 'right',groupable: false },
          { text: '% Falta p/ Objetivo', value: 'target', align: 'right',groupable: false },
        ],
        assets: [
          {
            asset: 'ITSA4',
            categoria: 'Ações BR',
            qtd: '100',
            target: '4%',
          },
          
          {
            asset: 'VT',
            categoria: 'ETFs',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'MGLU3',
            categoria: 'Ações BR',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'XPML11',
            categoria: 'Fiis',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'KNRI11',
            categoria: 'Fiis',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'XPLG11',
            categoria: 'Fiis',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'AMZN',
            categoria: 'Stoks',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'KNRI11',
            categoria: 'Fiis',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'MGLU3',
            categoria: 'Ações BR',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'AMZN',
            categoria: 'Stocks',
            qtd: '100',
            target: '4%',
          },
          {
            asset: 'ITSA4',
            categoria: 'Ações BR',
            qtd: '100',
            target: '4%',
          },
        ],
      }
    },
  }
</script>