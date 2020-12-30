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

          </div>
        </div>
      </div>
    </div>
</template>
<script>  
    export default {
    data: () => ({
    
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
            
    })
  }
</script>

<style scoped>
</style>