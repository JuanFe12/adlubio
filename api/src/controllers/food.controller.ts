import { Request, Response } from "express";
import { Food } from '../models/food.model';

//TODO trabajar con el menu.json

export const createFood= async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { nameFood, price, description, discounts } = req.body;

  const result = await Food.create({
    data: {
      nameFood,
      price,
      description,
      discounts
     }
  }).catch((e) => {
    console.log(e);
  });

  return res.json(result);
};