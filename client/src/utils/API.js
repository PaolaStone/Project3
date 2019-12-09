import axios from "axios";

export default {
  
  getPorts: function() {
    return axios.get('/api/ports');
  },
  update: function(id) {
    return axios.post('/api/ports/${id}', {
        body:JSON
    }).then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
    console.log("it made it to API")
  },
  getOpens: function() {
    return axios.get('/api/opens');
  },
  getmdas: function() {
    return axios.get('/api/mdas');
  }
 
};