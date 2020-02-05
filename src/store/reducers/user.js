import { 
  SIGNIN_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  //SIGN_OUT 
} from '../actions/types';

const INITIAL_STATE = { 
  profile: null
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS: {
      return { ...state, profile: action.payload.user }
    }
    case UPDATE_PROFILE_SUCCESS: {
      return { ...state, profile: action.payload.profile }
    }
    /*case SIGN_OUT: {
      return { ...state, profile: null }
    }*/
    default: 
      return state;
  }
}