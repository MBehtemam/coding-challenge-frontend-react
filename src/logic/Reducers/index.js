import { combineReducers } from 'redux';
import incidents from './incidentsReducer';
import lastPageFetchNumber from './lastPageFetchNumberReducer';
import locationsLoading from './locationsLoadingReducer';
import occurredAfter from './occurredAfter';
import occurredBefore from './occurredBefore';
import perPage from './perPageReducer';
import proximity from './proximityReducer';
import query from './queryReducer';
import locations from './locationsReducer';
import incident from './incidentReducer';
import incidentStatus from './incidentStatusReducer';
import incidentsStatus from './incidentsStatusReducer';
import incidentTypes from './incidentTypesReducer';
import incidentType from './incidentTypeReducer';

const reducers = combineReducers({
  incidents,
  lastPageFetchNumber,
  occurredAfter,
  occurredBefore,
  perPage,
  proximity,
  query,
  locationsLoading,
  locations,
  incident,
  incidentStatus,
  incidentsStatus,
  incidentTypes,
  incidentType
});
export default reducers;
