import IncidentsAPI from '../API/IncidentsAPI';
import { incrementLastPageNumber } from './lastPageFetchNumberActions';
import IncidentsUrlGenerator from '../Helpers/IncidentsUrlGenerator';
import { INCIDENTS_CLEAR, INCIDENTS_ADD_BATCH } from '../Constants/ActionTypes';
import {
  incidentsFetchFail,
  incidentsStartLoading,
  incidentsStopLoading
} from './incidentsStatusActions';
/**
 * this action clear all incidents
 */
export const clearIncidents = () => ({
  type: INCIDENTS_CLEAR
});
/**
 * this method get array of incidents and added it to list of incidents and a unique id of defining page id
 * @param {Array} incidents arrays of incidents that we want to add it to list
 * @param {Number} pageId unique page id that indicate page number
 */
export const addIncidents = (incidents, pageId) => ({
  type: INCIDENTS_ADD_BATCH,
  payload: { incidents, pageId }
});

export const getIncidents = (page = 1) => {
  return (dispatch, getState) => {
    const { occurredAfter, occurredBefore, proximity, query, perPage } = getState();
    // start loading
    dispatch(incidentsStartLoading());
    IncidentsAPI.getIncidents(
      IncidentsUrlGenerator({
        page,
        perPage,
        occurredAfter,
        occurredBefore,
        query,
        proximity,
        proximitySquare: 100
      })
    )
      .then(data => {
        // stop loading
        dispatch(incidentsStopLoading());
        // increment or set lastFetchPage
        dispatch(incrementLastPageNumber());
        // adding bikes to list
        if (data.incidents.length === 0) {
          dispatch(incidentsFetchFail('Nothing found'));
        } else {
          dispatch(addIncidents(data.incidents, page));
        }
      })
      .catch(() => {
        dispatch(incidentsFetchFail('Some error happen'));
      });
  };
};
