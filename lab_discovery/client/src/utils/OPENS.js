import axios from "axios";

export default {
  
  getOpens: function() {
    return axios.get('/api/opens');
  },
  getPort: function(id) {
    return axios.get('/api/opens/${id}' )
  }
}