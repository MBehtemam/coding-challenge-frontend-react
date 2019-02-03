import IncidentsAPI from '../API/IncidentsAPI';
import { startLoading, stopLoading } from './loadingActions';

import UrlGenerator from '../Helpers/UrlGenerator';

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
