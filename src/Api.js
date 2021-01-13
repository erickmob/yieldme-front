import axios from 'axios'  
  
const SERVER_URL = 'http://localhost:8080';  
  
const instance = axios.create({  
  baseURL: SERVER_URL,  
  timeout: 1000  
});  
  
export default {  
  
  async execute(method, resource, data, config) {  
    return instance({  
      method:method,  
      url: resource,  
      data,  
      headers: {  
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
      },  
      ...config  
    })  
  },  
  
  
  createNewContribution(contribution) {  
    return this.execute('POST', 'contributions/', contribution)  
  },  
  
  getAllContributions() {  
    return this.execute('GET','contributions/', null, {  
      transformResponse: [function (data) {  
          console.log(data)
        return data? JSON.parse(data) : data;  
      }]  
    })  
  },  
  
  getAllAssets(val) {
    console.log("---")
    console.log(val)  
    console.log("---")
    return this.execute('GET','assets?query='+val, null, {  
      transformResponse: [function (data) {  
          console.log(data)
        return data? JSON.parse(data) : data;  
      }]  
    })  
  },  
  
}