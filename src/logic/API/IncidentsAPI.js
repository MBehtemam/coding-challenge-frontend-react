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

  /**
   * this method ge an incident id and return it
   */
  static async getIncident(id) {
    try {
      const response = await axios.get(`https://bikewise.org:443/api/v2/incidents/${id}`);
      return response.data;
    } catch (err) {
      return err;
    }
  }
}
