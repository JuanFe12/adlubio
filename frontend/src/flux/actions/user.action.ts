import  { authenticationRegister } from '../../services/authentication.service';
import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../../constants";

const startRegister = () => {
  return { type: REGISTER_USER_START };
};

const successRegister = () => {
  return { type: REGISTER_USER_SUCCESS };
};

const errorRegister = () => {
  return { type: REGISTER_USER_ERROR };
};

export const registerAction = asyn() =>{
  return asyn(dispatch: any) => {
    try {
      dispatch( startRegister() )

    } catch (error) {
      dispatch( errorRegister() )
    }
  }
}