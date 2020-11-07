import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=5&nat=us";
const APIKEY = "";

export default {
  getEmployee: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
  
};