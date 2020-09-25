import { combineReducers } from "redux";

import registerReducer from "./authentication/register.reducer";
import loginReducer from "./authentication/login.reducer";
import foodReducer from "./foods/food.reducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  foodReducer,
});
