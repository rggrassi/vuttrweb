import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE, SIGNIN_RESET } from './types';

export function signInRequest(email, password) {
    return {
        type: SIGNIN_REQUEST,
        payload: { email, password }
    }
}

export function signInSuccess(token, user) {
    return {
        type: SIGNIN_SUCCESS,
        payload: { token, user }
    }
}

export function signInFailure(message) {
    return {
        type: SIGNIN_FAILURE,
        payload: { message }
    }
}

export function signInReset() {
    return {
        type: SIGNIN_RESET,
    }
}