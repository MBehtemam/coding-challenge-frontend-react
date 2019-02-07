import axios from 'axios';
/**
 * @class
 * this class contains static methods for fetching and sending queries and data
 * to server
 */
export default class IncidentsAPI {
  static async getIncidents(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      return err;
    }
  }
}
