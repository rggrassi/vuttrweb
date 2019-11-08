import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_RESET,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_RESET
} from "../actions/types";

const INITIAL_STATE = {
  token: null,
  signed: false,
  fetching: false,
  error: null
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_REQUEST: {
      return { ...state, fetching: true, error: null }
    }
    case SIGNIN_SUCCESS: {
      return { ...state, token: action.payload.token, signed: true, fetching: false }
    }
    case SIGNIN_FAILURE: {
      return { ...state, fetching: false, error: action.payload }
    }
    case SIGNIN_RESET: {
      return { ...state, fetching: false, error: null }
    }

    case SIGNUP_REQUEST: {
      return { ...state, fetching: true, error: null }
    }
    case SIGNUP_SUCCESS: {
      return { ...state, fetching: false }
    }
    case SIGNUP_FAILURE: {
      return { ...state, fetching: false, error: action.payload }
    }
    case SIGNUP_RESET: {
      return { ...state, fetching: false, error: null }
    }

    default:
      return state;
  }
}