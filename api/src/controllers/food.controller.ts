import { Request, Response } from "express";
import { Food } from '../models/food.model';

//TODO trabajar con el menu.json

export const createFood= async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { nameFood, price, description, discounts, typeFood, url } = req.body;

  const result = await Food.create({
    data: {
      nameFood,
      price,
      typeFood,
      url,
      description,
      discounts
     }
  }).catch((e) => {
    console.log(e);
  });

  return res.json(result);
};

export const getFood = async (
  req: Request,
  res: Response
) =>{

  const food = await Food.findMany()
  return res.json(food)
}