import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "../../../constants";
import { userActionInterface } from "../../../interfaces/user.interface";

const initialState = {
  user: [],
  userLoanding: false,
  userError: null,
};

export default function (state = initialState, action: userActionInterface) {
  switch (action.type) {
    case LOGIN_USER_START:
      return { ...state, userLoanding: true, userError: null, user: [] };
    case LOGIN_USER_SUCCESS:
      return { ...state, userLoanding: false, user: action.payload };
    case LOGIN_USER_ERROR:
      return { ...state, userLoanding: false, userError: action.payload };
    default:
      return state;
  }
}
