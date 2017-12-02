import * as actionTypes from '../constants/ActionTypes';

export default function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks,
  };
}
