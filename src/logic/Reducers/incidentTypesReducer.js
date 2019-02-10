export const defaultState = [
  '',
  'crash',
  'hazard',
  'theft',
  'unconfirmed',
  'infrastructure_issue',
  'chop_shop'
];
const incidentsTypeReducer = (state = defaultState, action) => defaultState;
export default incidentsTypeReducer;
