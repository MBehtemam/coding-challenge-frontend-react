import { combineReducers } from 'redux';
import incidents from './incidentsReducer';
import lastPageFetchNumber from './lastPageFetchNumberReducer';
import loading from './loadingReducer';
import locationsLoading from './locationsLoadingReducer';
import occurredAfter from './occurredAfter';
import occurredBefore from './occurredBefore';
import perPage from './perPageReducer';
import proximity from './proximityReducer';
import query from './queryReducer';
import locations from './locationsReducer';
import incident from './incidentReducer';
import incidentStatus from './incidentStatusReducer';

const reducers = combineReducers({
  incidents,
  lastPageFetchNumber,
  loading,
  occurredAfter,
  occurredBefore,
  perPage,
  proximity,
  query,
  locationsLoading,
  locations,
  incident,
  incidentStatus
});
export default reducers;
