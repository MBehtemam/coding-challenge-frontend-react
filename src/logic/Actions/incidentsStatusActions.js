import {
  INCIDENTS_FETCH_FAIL,
  INCIDENTS_LOADING_START,
  INCIDENTS_LOADING_STOP
} from '../Constants/ActionTypes';

export const incidentsStartLoading = () => ({
  type: INCIDENTS_LOADING_START
});

export const incidentsStopLoading = () => ({
  type: INCIDENTS_LOADING_STOP
});

export const incidentsFetchFail = err => ({
  type: INCIDENTS_FETCH_FAIL,
  payload: {
    err
  }
});
