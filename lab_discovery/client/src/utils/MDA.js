import axios from "axios";

export default {
  
    getmdaPorts: function() {
    return axios.get('/api/mdaports');
  }
};