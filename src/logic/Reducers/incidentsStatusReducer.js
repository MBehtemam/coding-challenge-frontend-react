import {
  INCIDENTS_LOADING_START,
  INCIDENTS_LOADING_STOP,
  INCIDENTS_FETCH_FAIL
} from '../Constants/ActionTypes';

export const defaultState = {
  ok: 1,
  err: '',
  loading: false
};

const incidentsStatusReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCIDENTS_LOADING_START:
      return {
        ...defaultState,
        loading: true
      };
    case INCIDENTS_LOADING_STOP:
      return {
        ...defaultState,
        loading: false
      };
    case INCIDENTS_FETCH_FAIL:
      return {
        ...defaultState,
        ok: 0,
        err: action.payload.err
      };
    default:
      return state;
  }
};

export default incidentsStatusReducer;
