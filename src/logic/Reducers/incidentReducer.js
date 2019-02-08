import { INCIDENT_SET, INCIDENT_CLEAR } from '../Constants/ActionTypes';

export const defaultState = {};
const incidentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCIDENT_SET:
      return action.payload;
    case INCIDENT_CLEAR:
      return {};
    default:
      return state;
  }
};
export default incidentReducer;
