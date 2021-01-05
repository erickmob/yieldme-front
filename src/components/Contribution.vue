<template>
  <v-simple-table
    dark
    fixed-header
    height="900px"
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Corretora
          </th>
          <th class="text-left">
            Tipo
          </th>
          <th class="text-left">
            Ticker
          </th>
          <th class="text-left">
            Quantidade
          </th>
          <th class="text-left">
            Preço/Cota
          </th>
          <th class="text-left">
            Total
          </th>
          <th class="text-left">
            Moeda
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in assets"
          :key="item.name"
        >
          <td>{{ item.corretora }}</td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.tiker }}</td>
          <td>{{ item.quantide }}</td>
          <td>{{ item.preocota }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.moeda }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    data () {
      return {
        assets: 
        [
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-06-01T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 100,
              "preocota": 13.15,
              "total": 1315,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-01-06T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 62,
              "preocota": 11,
              "total": 682,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-02-11T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 42,
              "preocota": 11,
              "total": 462,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-07-27T03:00:00.000Z",
              "tiker": "KNRI11",
              "quantide": 5,
              "preocota": 158.62,
              "total": 793.1,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-08-20T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 83,
              "preocota": 10.28,
              "total": 853.2399999999999,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-08-26T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 134,
              "preocota": 10.28,
              "total": 1377.52,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-08-26T03:00:00.000Z",
              "tiker": "VILG11",
              "quantide": 20,
              "preocota": 127.83,
              "total": 2556.6,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-08-26T03:00:00.000Z",
              "tiker": "XPLG11",
              "quantide": 51,
              "preocota": 128.97,
              "total": 6577.47,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-08-26T03:00:00.000Z",
              "tiker": "XPML11",
              "quantide": 8,
              "preocota": 108.75,
              "total": 870,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-09-16T03:00:00.000Z",
              "tiker": "BBDC4",
              "quantide": 400,
              "preocota": 20.52,
              "total": 8208,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-09-16T03:00:00.000Z",
              "tiker": "MGLU3",
              "quantide": 400,
              "preocota": 22.29,
              "total": 8916,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "17/092020",
              "tiker": "PETR4",
              "quantide": 400,
              "preocota": 22.15,
              "total": 8860,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "17/092020",
              "tiker": "ITSA4",
              "quantide": 400,
              "preocota": 9.14,
              "total": 3656,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-10-02T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": 79,
              "preocota": 10.46,
              "total": 826.34,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-10-02T03:00:00.000Z",
              "tiker": "CPTS11",
              "quantide": 20,
              "preocota": 98.41,
              "total": 1968.1999999999998,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-10-05T03:00:00.000Z",
              "tiker": "BBDC4",
              "quantide": 200,
              "preocota": 19.42,
              "total": 3884.0000000000005,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-10-05T03:00:00.000Z",
              "tiker": "ITSA4",
              "quantide": 600,
              "preocota": 8.85,
              "total": 5310,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-10-08T03:00:00.000Z",
              "tiker": "EGIE3",
              "quantide": 200,
              "preocota": 40.46,
              "total": 8092,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-10-08T03:00:00.000Z",
              "tiker": "KNRI11",
              "quantide": 12,
              "preocota": 166.65,
              "total": 1999.8000000000002,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-10-08T03:00:00.000Z",
              "tiker": "TIET11",
              "quantide": 100,
              "preocota": 14.66,
              "total": 1466,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-03T03:00:00.000Z",
              "tiker": "WEGE3",
              "quantide": 25,
              "preocota": 77.96,
              "total": 1948.9999999999998,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-03T03:00:00.000Z",
              "tiker": "ENBR3",
              "quantide": 100,
              "preocota": 17.26,
              "total": 1726.0000000000002,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-11-03T03:00:00.000Z",
              "tiker": "KNRI11",
              "quantide": 5,
              "preocota": 158.68,
              "total": 793.4000000000001,
              "moeda": "Reais"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-11-03T03:00:00.000Z",
              "tiker": "VT",
              "quantide": 6.1376,
              "preocota": 81.05,
              "total": 497.45248,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "Stock",
              "data": "2020-11-03T03:00:00.000Z",
              "tiker": "AMZN",
              "quantide": 0.0307,
              "preocota": 3237.46,
              "total": 99.390022,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "SPHQ",
              "quantide": 6.2423,
              "preocota": 39.88,
              "total": 248.94292400000003,
              "moeda": "Dollar"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "WEGE3",
              "quantide": 7,
              "preocota": 81.62,
              "total": 571.34,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "WEGE3",
              "quantide": 7,
              "preocota": 82.21,
              "total": 575.4699999999999,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "ENBR3",
              "quantide": 20,
              "preocota": 17.82,
              "total": 356.4,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "WEGE3",
              "quantide": 16,
              "preocota": 82.24,
              "total": 1315.84,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "Ação",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "WEGE3",
              "quantide": 45,
              "preocota": 84.8,
              "total": 3816,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "KNRI11",
              "quantide": 3,
              "preocota": 158.95,
              "total": 476.84999999999997,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-11-04T03:00:00.000Z",
              "tiker": "XPML11",
              "quantide": 5,
              "preocota": 109.9,
              "total": 549.5,
              "moeda": "Reais"
          },
          {
              "corretora": "XUMM",
              "tipo": "Crypto",
              "data": "2020-11-11T03:00:00.000Z",
              "tiker": "RIPPLE",
              "quantide": 229.250866,
              "preocota": 2.2,
              "total": 504.35190520000003,
              "moeda": "Reais"
          },
          {
              "corretora": "Blockchain",
              "tipo": "Crypto",
              "data": "2020-11-11T03:00:00.000Z",
              "tiker": "BITCOIN",
              "quantide": 0.01196373,
              "preocota": 57148.09,
              "total": 683.7043187757,
              "moeda": "Reais"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-11-12T03:00:00.000Z",
              "tiker": "IQLT",
              "quantide": 3.7161,
              "preocota": 33.45,
              "total": 124.30354500000001,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-11-12T03:00:00.000Z",
              "tiker": "EMGF",
              "quantide": 2.7092,
              "preocota": 45.9,
              "total": 124.35228,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "Stock",
              "data": "2020-11-13T03:00:00.000Z",
              "tiker": "TSLA",
              "quantide": 0.069,
              "preocota": 402.75,
              "total": 27.78975,
              "moeda": "Dollar"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "MXRF11",
              "quantide": -250,
              "preocota": 10.36,
              "total": -2590,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "KNRI11",
              "quantide": 5,
              "preocota": 155.86,
              "total": 779.3000000000001,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "XPML11",
              "quantide": 5,
              "preocota": 113.49,
              "total": 567.4499999999999,
              "moeda": "Reais"
          },
          {
              "corretora": "XP",
              "tipo": "FII",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "VILG11",
              "quantide": 10,
              "preocota": 125.46,
              "total": 1254.6,
              "moeda": "Reais"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "VT",
              "quantide": 1.6337,
              "preocota": 91.27,
              "total": 149.107799,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "SPHQ",
              "quantide": 1.7991,
              "preocota": 41.44,
              "total": 74.55470399999999,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "IQLT",
              "quantide": 1.067,
              "preocota": 34.93,
              "total": 37.270309999999995,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "EMGF",
              "quantide": 0.7798,
              "preocota": 47.79,
              "total": 37.266642000000004,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "Stock",
              "data": "2020-12-09T03:00:00.000Z",
              "tiker": "TSLA",
              "quantide": 0.0107,
              "preocota": 638.32,
              "total": 6.830024,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-30T03:00:00.000Z",
              "tiker": "VT",
              "quantide": 10.0527,
              "preocota": 92.78,
              "total": 932.6895059999999,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-30T03:00:00.000Z",
              "tiker": "SPHQ",
              "quantide": 11.1265,
              "preocota": 41.92,
              "total": 466.42288,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-30T03:00:00.000Z",
              "tiker": "IQLT",
              "quantide": 6.2007,
              "preocota": 36.08,
              "total": 223.721256,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "ETF",
              "data": "2020-12-30T03:00:00.000Z",
              "tiker": "EMGF",
              "quantide": 4.5592,
              "preocota": 49.11,
              "total": 223.902312,
              "moeda": "Dollar"
          },
          {
              "corretora": "Avenue",
              "tipo": "Stock",
              "data": "2020-12-30T03:00:00.000Z",
              "tiker": "TSLA",
              "quantide": 0.2925,
              "preocota": 672.44,
              "total": 196.6887,
              "moeda": "Dollar"
          }
      ],
      }
    },
  }
</script>