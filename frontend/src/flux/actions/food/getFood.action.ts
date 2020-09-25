import { getFoodService } from "../../../services/foods.service";
import { FoodInterface } from "../../../interfaces/food.interface";
import {
  GET_FOODS_START,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR,
} from "../../../constants";

const startFood = () => {
  return { type: GET_FOODS_START };
};

const successFood = (food: FoodInterface) => {
  return { type: GET_FOODS_SUCCESS, payload: food };
};

const errorFood = (error: any) => {
  return { type: GET_FOODS_ERROR, payload: error };
};

export const foodAction = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startFood());
      const getUser = await getFoodService();
      dispatch(successFood(getUser));
    } catch (error) {
      dispatch(errorFood(error));
    }
  };
};
