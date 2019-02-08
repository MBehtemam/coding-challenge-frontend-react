import {
  INCIDENT_LOADING_START,
  INCIDENT_LOADING_STOPT,
  INCIDENT_FETCH_FAILED
} from '../Constants/ActionTypes';

export const defaultState = {
  ok: 1,
  err: '',
  loading: false
};

const incidentStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCIDENT_LOADING_START:
      return {
        ...defaultState,
        loading: true
      };
    case INCIDENT_LOADING_STOPT:
      return {
        ...defaultState,
        loading: false
      };
    case INCIDENT_FETCH_FAILED:
      return {
        ...defaultState,
        ok: 0,
        err: action.payload.err
      };
    default:
      return state;
  }
};

export default incidentStatusReducer;
