import axios from "axios";

export default {
  
  getOpens: function() {
    return axios.get('/api/opens');
  }
};