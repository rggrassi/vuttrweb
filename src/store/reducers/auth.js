import { SIGNIN_REQUEST, SIGNIN_SUCCESS } from '../actions/types';

const INITIAL_STATE = { token: null, signed: false, fetching: false };

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_REQUEST: {
      return { ...state, fetching: true }
    }
    case SIGNIN_SUCCESS: {
      return { ...state, token: action.payload.token, signed: true, fetching: false }
    }
    default:
      return state;
  }
}
