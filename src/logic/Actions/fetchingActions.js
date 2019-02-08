import { resetLastPageNumber } from './lastPageFetchNumberActions';
import { clearIncidents, getIncidents } from './incidentsActions';
import { clearLocations, getLocations } from './LocationsActions';

export const fetchResults = (reload = false, page = 1) => {
  return (dispatch, getState) => {
    const { lastPageFetchNumber } = getState();
    if (reload) {
      Promise.all([
        dispatch(resetLastPageNumber()),
        dispatch(clearIncidents()),
        dispatch(clearLocations())
      ]).then(() => {
        dispatch(getIncidents(1));
        dispatch(getLocations());
      });
    } else if (page > lastPageFetchNumber) {
      dispatch(getIncidents(page));
      dispatch(getLocations());
    }
  };
};
