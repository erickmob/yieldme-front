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
            <v-simple-table dark>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Ticker
                      </th>
                      <th class="text-left">
                        PM
                      </th>
                      <th class="text-left">
                        Qtd
                      </th>
                      <th class="text-left">
                        Preço Atual
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in avenueAssets"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.pm }}</td>
                      <td>{{ item.qtd }}</td>
                      <td>{{ item.currentPrice }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

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
        avenueAssets: [
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
          },
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
        ]
      };
    },
    

    created() {
      console.log("created");
      this.avenueAssets.forEach(element => {
        console.log(element.name);
        axios.get("https://yfinance-api.herokuapp.com/api/v1/resources/ticker?ticker="+element.name)
        .then(response => element.currentPrice = response.data.last);
      });
    },
    mounted(){
      
    }
    
  }
</script>

<style scoped>
</style>