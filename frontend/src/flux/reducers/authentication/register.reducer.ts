import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../../../constants";
import { userActionInterface } from "../../../interfaces/user.interface";

const initialState = {
  user: [],
  userLoanding: false,
  userError: null,
};

export default function (state = initialState, action: userActionInterface) {
  switch (action.type) {
    case REGISTER_USER_START:
      return { ...state, userLoanding: true, userError: null, user: [] };
    case REGISTER_USER_SUCCESS:
      return { ...state, userLoanding: false, user: action.payload };
    case REGISTER_USER_ERROR:
      return { ...state, userLoanding: false, userError: action.payload };
    default:
      return state;
  }
}
