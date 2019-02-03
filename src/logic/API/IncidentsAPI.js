import axios from 'axios';
/**
 * @class
 * this class contains static methods for fetching and sending queries and data
 * to server
 */
export default class IncidentsAPI {
  static getIncidents(url) {
    return axios
      .get(url)
      .then(response => response)
      .catch(err => err);
  }
}
