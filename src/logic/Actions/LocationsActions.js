import {
  LOCATIONS_ADD_BATCH,
  LOCATIONS_SET_BATCH,
  LOCATIONS_CLEAR
} from '../Constants/ActionTypes';
import LocationsAPI from '../API/LocationsAPI';
import LocationsUrlGenerator from '../Helpers/LocationsUrlGenerator';
import { startLocationsLoading, stopLocationsLoading } from './locationsLoadingActions';

/**
 * this action get array of locations and append it to state
 * @param {Array} locations list of locations to add
 */
export const addLocations = locations => ({
  type: LOCATIONS_ADD_BATCH,
  payload: locations
});

/**
 * this action get array of locations and set it
 * @param {Array} locations list of locations to add
 */
export const setLocations = locations => ({
  type: LOCATIONS_SET_BATCH,
  payload: locations
});

/**
 * this action clear locations
 */
export const clearLocations = () => ({
  type: LOCATIONS_CLEAR
});

export const getLocations = () => {
  return (dispatch, getState) => {
    const { occurredAfter, occurredBefore, incidentType, proximity, query } = getState();
    dispatch(startLocationsLoading());
    dispatch(clearLocations());
    LocationsAPI.getLocations(
      LocationsUrlGenerator({ occurredAfter, occurredBefore, incidentType, proximity, query })
    )
      .then(locations => {
        dispatch(stopLocationsLoading());
        dispatch(setLocations(locations.features));
      })
      .catch(() => {
        dispatch(stopLocationsLoading());
      });
  };
};
