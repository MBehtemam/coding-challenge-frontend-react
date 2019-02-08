import { INCIDENT_SET, INCIDENT_CLEAR } from '../Constants/ActionTypes';
import IncidentsAPI from '../API/IncidentsAPI';

/**
 * this method get incident and set it as a new incident
 */
export const setIncident = incident => ({
  type: INCIDENT_SET,
  payload: incident
});

export const clearIncident = () => ({
  type: INCIDENT_CLEAR
});

export const fetchIncident = id => {
  return dispatch => {
    IncidentsAPI.getIncident(id)
      .then(result => {
        dispatch(setIncident(result.incident));
      })
      .catch(err => err);
  };
};
