import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
        img: action.payload.img,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        name: null,
      };
    default:
      return state;
  }
};
