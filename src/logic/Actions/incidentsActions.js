import IncidentsAPI from '../API/IncidentsAPI';
import { startLoading, stopLoading } from './loadingActions';
import { incrementLastPageNumber } from './lastPageFetchNumberActions';
import IncidentsUrlGenerator from '../Helpers/IncidentsUrlGenerator';
import { INCIDENTS_CLEAR, INCIDENTS_ADD_BATCH } from '../Constants/ActionTypes';

/**
 * this action clear all incidents
 */
export const clearIncidents = () => ({
  type: INCIDENTS_CLEAR
});
/**
 * this method get array of incidents and added it to list of incidents
 * @param {Array} incidents arrays of incidents that we want to add it to list
 */
export const addIncidents = incidents => ({
  type: INCIDENTS_ADD_BATCH,
  payload: incidents
});

export const getIncidents = () => {
  return (dispatch, getState) => {
    const { occurredAfter, occurredBefore, proximity, query } = getState();
    // start loading
    dispatch(startLoading());
    IncidentsAPI.getIncidents(
      IncidentsUrlGenerator({
        page: 1,
        perPage: 1000,
        occurredAfter,
        occurredBefore,
        query,
        proximity,
        proximitySquare: 100
      })
    )
      .then(data => {
        // stop loading
        dispatch(stopLoading());
        // increment or set lastFetchPage
        dispatch(incrementLastPageNumber());
        // adding bikes to list
        // /TODO check for length of incidents
        dispatch(addIncidents(data.incidents));
      })
      .catch(() => {
        dispatch(stopLoading());
      });
  };
};
