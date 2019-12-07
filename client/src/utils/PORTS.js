import axios from "axios";

export default {
  
  getPorts: function() {
    return axios.get('/api/ports');
  }
};