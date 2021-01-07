<template>
<div id="wrapper">
      <div class="content-area">
        <div class="container-fluid">
          <div class="main">
            
            <div class="row mt-4">
              <div class="col-md-3">
                <div class="box shadow mt-4">
                  <div id="chart">
                      <apexchart width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box shadow mt-4">
                  <div id="chart">
                      <apexchart width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box shadow mt-4">
                  <div id="chart">
                      <apexchart width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box shadow mt-4">
                  <div id="chart">
                      <apexchart width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
            </div>


            <template>
              <v-expansion-panels dark>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Ações BR
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template>
                      <v-card dark>
                        <v-data-table
                          :headers="headers"
                          :items="acoesBrAssets"
                        ></v-data-table>
                      </v-card>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    FIIs
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template>
                      <v-card dark>
                        <v-data-table
                          :headers="headers"
                          :items="fiisAssets"
                        ></v-data-table>
                      </v-card>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    World ETF
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template>
                      <v-card dark>
                        <v-data-table
                          :headers="headers"
                          :items="etfAssets"
                        ></v-data-table>
                      </v-card>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    World Stocks
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template>
                      <v-card dark>
                        <v-data-table
                          :headers="headers"
                          :items="stocksAssets"
                        ></v-data-table>
                      </v-card>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Crypto
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <template>
                      <v-card dark>
                        <v-data-table
                          :headers="headers"
                          :items="cryptoAssets"
                        ></v-data-table>
                      </v-card>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>

          </div>
        </div>
      </div>
    </div>
</template>
<script>  
    import axios from 'axios';
    export default {
    name: "get-request",
    data() {
      return {
        totalVuePackages: null,
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },

        headers: [
          { text: 'Ticker', value: 'name' },
          { text: 'PM', value: 'pm' },
          { text: 'QTD', value: 'qtd2' },
          { text: 'Valor Atual', value: 'currentPrice' },
        ],
        acoesBrAssets: [
          {
            name: 'BBDC4.SA',
            pm: 20.15,
            qtd: 600,
            currentPrice: null,
            valuation: null,
          },
          {
            name: 'EGIE3.SA',
            pm: 40.46,
            qtd: 200,
            currentPrice: null,
          },
          {
            name: 'ENBR3.SA',
            pm: 17.35,
            qtd: 120,
            currentPrice: null,
          },
          {
            name: 'ITSA4.SA',
            pm: 8.96,
            qtd: 1000,
            currentPrice: null,
          },
          {
            name: 'MGLU3.SA',
            pm: 22.29,
            qtd: 400,
            currentPrice: null,
          },
          {
            name: 'TIET11.SA',
            pm: 14.66,
            qtd: 100,
            currentPrice: null,
          },
          {
            name: 'WEGE3.SA',
            pm: 82.2765,
            qtd: 100,
            currentPrice: null,
          }
        ],
        fiisAssets: [
          {
            name: 'CPTS11.SA',
            pm: 98.41,
            qtd: null,
            currentPrice: null,
            valuation: null,
          },
          {
            name: 'KNRI11.SA',
            pm: 161.41,
            qtd: null,
            currentPrice: null,
          },
          {
            name: 'MXRF11.SA',
            pm: 11.70,
            qtd: null,
            currentPrice: null,
          },
          {
            name: 'VILG11.SA',
            pm: 127.04,
            qtd: null,
            currentPrice: null,
          },
          {
            name: 'XPLG11.SA',
            pm: 128.97,
            qtd: null,
            currentPrice: null,
          },
          {
            name: 'XPML11.SA',
            pm: 110.38,
            qtd: null,
            currentPrice: null,
          }
        ],
        etfAssets: [
          {
            name: 'EMGF',
            pm: 47.90,
            qtd: 8.0482,
            currentPrice: null,
            valuation: null,
          },
          {
            name: 'IQLT',
            pm: 35.08,
            qtd: 10.9838,
            currentPrice: null,
          },
          {
            name: 'SPHQ',
            pm: 41.21,
            qtd: 19.1679,
            currentPrice: null,
          },
          {
            name: 'VT',
            pm: 88.60,
            qtd: 17.824,
            currentPrice: null,
          }
        ],
        stocksAssets: [
          {
            name: 'AMZN',
            pm: 3237.46,
            qtd: 0.0307,
            currentPrice: null,
          },
          {
            name: 'TSLA',
            pm: 621.46,
            qtd: 0.3722,
            currentPrice: null,
          }
        ],
        cryptoAssets: [
          {
            name: 'BTC-USD',
            pm: 57148.09,
            qtd: null,
            currentPrice: null,
            valuation: null,
          },
          {
            name: 'XRP-USD',
            pm: 2.20,
            qtd: null,
            currentPrice: null,
          }
        ]
      };
    },
    

    created() {
    },
    mounted(){
      console.log(`Working on '${process.env.VUE_APP_MODE}' mode! `);

      this.acoesBrAssets.forEach(element => {
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });

      this.fiisAssets.forEach(element => {
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });

      this.etfAssets.forEach(element => {
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });

      this.stocksAssets.forEach(element => {
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });

      this.cryptoAssets.forEach(element => {
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });
    }
    
  }
</script>

<style scoped>
</style>