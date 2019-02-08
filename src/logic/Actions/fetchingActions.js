import { resetLastPageNumber } from './lastPageFetchNumberActions';
import { clearIncidents, getIncidents } from './incidentsActions';
import { clearLocations, getLocations } from './LocationsActions';

const fetchResults = (reload = false, page = 1) => {
  return (dispatch, getState) => {
    const { incidents, locations } = getState();
    const hasPage = Object.keys(incidents).find(p => p === `p${page}`);
    if (reload) {
      // removing all unwanted and resetting states
      Promise.all([
        dispatch(resetLastPageNumber()),
        dispatch(clearIncidents()),
        dispatch(clearLocations())
      ]).then(() => {
        dispatch(getIncidents(1));
        dispatch(getLocations());
      });
      // check if we have page with incidents, so we don't request server
    } else if (!hasPage) {
      dispatch(getIncidents(page));
      if (locations.length) {
        dispatch(getLocations());
      }
    }
  };
};
export default fetchResults;
