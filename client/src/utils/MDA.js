import axios from "axios";

export default {
  
  getmdas: function() {
    return axios.get('/api/mdas');
  }
  
}