import IncidentsAPI from '../API/IncidentsAPI';
import { startLoading, stopLoading } from './loadingActions';

import UrlGenerator from '../Helpers/UrlGenerator';
import { INCIDENTS_CLEAR, INCIDENTS_ADD_BATCH } from '../Constants/ActionTypes';

export const getIncidents = () => {
  return (dispatch, getState) => {
    const {
      lastPageFetchNumber: page,
      occurredAfter,
      occurredBefore,
      perPage,
      proximity,
      query
    } = getState();
    // start loading
    dispatch(startLoading());
    IncidentsAPI.getIncidents(
      UrlGenerator({ page, perPage, occurredAfter, occurredBefore, query, proximity })
    )
      .then(data => {
        // stop loading
        dispatch(stopLoading());
        // increment or set lastFetchPage

        // adding bikes to list
      })
      .catch(err => {
        dispatch(stopLoading());
      });
  };
};

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
