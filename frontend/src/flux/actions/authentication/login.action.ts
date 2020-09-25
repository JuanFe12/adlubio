import { authenticationLogin } from "../../../services/authentication.service";
import { LoginInterface } from "../../../interfaces/user.interface";
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "../../../constants";

const startLogin = () => {
  return { type: LOGIN_USER_START };
};

const successLogin = (user: LoginInterface) => {
  return { type: LOGIN_USER_SUCCESS, payload: user };
};

const errorLogin = (error: any) => {
  return { type: LOGIN_USER_ERROR, payload: error };
};

export const loginAction = (user: LoginInterface) => {
  return async (dispatch: any) => {
    try {
      dispatch(startLogin());
      const getUser = await authenticationLogin(user);
      dispatch(successLogin(getUser));
    } catch (error) {
      dispatch(errorLogin(error));
    }
  };
};
