export interface FoodInterface {
  id?: number;
  nameFood: string;
  price: number;
  description: string;
  typeFood: string;
  url: string;
  discounts: number;
}

export interface FoodActionInterface {
  type: string;
  payload?: any;
}
