import * as types from "./constants";
import { Event } from "../../shared/types/types";

export const fetchEventsInit = () => {
  return {
    type: types.FETCH_EVENTS_INIT,
  };
};
export const fetchEventsSuccess = (events: Event[]) => {
  return {
    type: types.FETCH_EVENTS_SUCCESS,
    payload: events,
  };
};
export const fetchEventsFailed = (error: any) => {
  return {
    type: types.FETCH_EVENTS_FAILED,
    payload: error,
  };
};
