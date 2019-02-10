import { INCIDENT_TYPE_CLEAR, INCIDENT_TYPE_SET } from '../Constants/ActionTypes';

export const defaultState = '';

const incidentTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCIDENT_TYPE_CLEAR:
      return defaultState;
    case INCIDENT_TYPE_SET:
      return action.payload;
    default:
      return state;
  }
};

export default incidentTypeReducer;
