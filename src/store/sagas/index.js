import { all, takeLatest } from "redux-saga/effects";
import {
  SIGNIN_REQUEST,
  SIGNUP_REQUEST,
  UPDATE_PROFILE_REQUEST
} from "../actions/types";
import { signIn, signUp } from "./auth";
import { updateProfile } from "./user";

export default function* rootSaga() {
  return yield all([
    takeLatest(SIGNIN_REQUEST, signIn),
    takeLatest(SIGNUP_REQUEST, signUp),
    takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)
  ]);
}