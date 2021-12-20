import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_ALERT,
} from '../actions/types';

const initialstate = {
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, token: null, isAuthenticated: false, loading: false };

    //   break;

    default:
      return state;
  }
}
