import {
  FoodInterface,
  FoodActionInterface,
} from "../../../interfaces/food.interface";
import {
  GET_FOODS_START,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR,
} from "../../../constants";

const initialState = {
  food: [],
  foodLoanding: false,
  foodError: null,
};

export default function (state = initialState, action: FoodActionInterface) {
  switch (action.type) {
    case GET_FOODS_START:
      return { ...state, foodLoanding: true, foodError: null, food: [] };
    case GET_FOODS_SUCCESS:
      return { ...state, foodLoanding: false, food: action.payload };
    case GET_FOODS_ERROR:
      return { ...state, foodLoanding: false, foodError: action.payload };
    default:
      return state;
  }
}
