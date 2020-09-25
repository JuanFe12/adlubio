import { authenticationRegister } from "../../../services/authentication.service";
import { UserInteface } from "../../../interfaces/user.interface";
import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../../../constants";

const startRegister = () => {
  return { type: REGISTER_USER_START };
};

const successRegister = (user: UserInteface) => {
  return { type: REGISTER_USER_SUCCESS, payload: user };
};

const errorRegister = (error: any) => {
  return { type: REGISTER_USER_ERROR, payload: error };
};

export const registerAction = async (user: UserInteface) => {
  return async (dispatch: any) => {
    try {
      dispatch(startRegister());
      const rsp = await authenticationRegister(user);
      console.log(rsp);
    } catch (error) {
      dispatch(errorRegister(error));
    }
  };
};
