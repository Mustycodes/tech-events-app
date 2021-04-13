import { initialState } from "./initialState";
import * as types from "./constants";
import { Reducer } from "redux";

const eventsReducer:Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS_INIT:
      return { ...state, isLoading: true, error: false };
    case types.FETCH_EVENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.FETCH_EVENTS_FAILED:
      return { ...state, isLoading: false, error: true };


    case types.ADD_EVENT_INIT:
      return {...state, isLoading:true}
    case types.ADD_EVENT_SUCCESS:
      const newData = [...state.data, action.payload];
      console.log(state);
      
      return {
        ...state, isLoading:false, data:newData 
      }
    default:
      return state;
  }
};

export default eventsReducer;
