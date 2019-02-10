import { INCIDENT_TYPE_CLEAR, INCIDENT_TYPE_SET } from '../Constants/ActionTypes';

export const setIncidentType = type => ({
  type: INCIDENT_TYPE_SET,
  payload: type
});

export const clearIncidentType = () => ({
  type: INCIDENT_TYPE_CLEAR
});
