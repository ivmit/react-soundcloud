import * as actionTypes from '../constants/ActionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return [
        ...state,
        ...action.payload,
      ];

    default:
      return state;
  }
}
