import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_RESET,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
  //SIGNUP_FAILURE
} from "./types";

export function signInRequest(email, password) {
  return {
    type: SIGNIN_REQUEST,
    payload: { 
      email,
      password
    }
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGNIN_SUCCESS,
    payload: { 
      token,
      user
    }
  };
}

export function signInFailure(message) {
  return {
    type: SIGNIN_FAILURE,
    payload: { message }
  };
}

export function signInReset() {
  return {
    type: SIGNIN_RESET
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: SIGNUP_REQUEST,
    payload: { 
      name,
      email,
      password
    }
  }
}

export function signUpSuccess() {
  return {
    type: SIGNUP_SUCCESS
  }
}

export function signUpFailure(message) {
  return {
    type: SIGNUP_FAILURE,
    payload: { message }
  }
}