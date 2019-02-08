import {
  INCIDENT_LOADING_STOPT,
  INCIDENT_FETCH_FAILED,
  INCIDENT_LOADING_START
} from '../Constants/ActionTypes';

export const incidentStartLoading = () => ({
  type: INCIDENT_LOADING_START
});

export const incidentStopLoading = () => ({
  type: INCIDENT_LOADING_STOPT
});

export const incidentFetchFail = err => ({
  type: INCIDENT_FETCH_FAILED,
  payload: {
    err
  }
});
