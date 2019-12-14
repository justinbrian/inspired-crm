import { GET_GOALTRACKER, SET_GOALTRACKER } from "../actions/types";

const initialState = {
    tracker: {},
    signal: false
};

export default function(state = initialState, action) {
    switch (action.type) {
      case GET_GOALTRACKER:
        return {
            ...state,
            tracker: action.payload
        };
      case SET_GOALTRACKER:
        state.tracker.plan = action.payload.plan;
        state.tracker.startdate = action.payload.startdate;
        state.tracker.nrog = action.payload.nrog;
        state.tracker.nrogdone = action.payload.nrogdone;
        state.tracker.fug = action.payload.fug;
        state.tracker.fugdone = action.payload.fugdone;
        state.tracker.trog = action.payload.trog;
        state.tracker.trogdone = action.payload.trogdone;
        return{
          ...state,
          signal: (!state.signal)
        }
      default:
        return state;
    }
  }