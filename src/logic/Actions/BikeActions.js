import BikesAPI from '../API/BikesAPI';
import { startLoading, stopLoading } from './loadingActions';

import UrlGenerator from '../Helpers/UrlGenerator';

export const getBikes = () => {
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
    BikesAPI.getBikes(
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
