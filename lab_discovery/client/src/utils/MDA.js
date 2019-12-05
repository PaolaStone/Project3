import axios from "axios";

export default {
  
  getmdas: function() {
    return axios.get('/api/mdas');
  }
  // ,
  // getPort: function(id) {
  //   return axios.get('/api/mdas/${id}' )
  // }
}