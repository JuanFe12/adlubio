import { Request, Response } from "express";
import { Orderfood } from '../models/orderfood.model'

export const createOrderfood = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { order, food } = req.body;
  
  const result = await Orderfood.create({
    data: {
      order:{
        connect: { id : order }
      },
      food:{
         connect: { id: food }
      }
    },
    include: {
      food: true,
      order: true
    },
  }).catch((e) => {
    console.log(e);
  });

  return res.json(result);
};

const Total = async (
  req: Request,
  res: Response
): Promise<Response> => {
  

  return res.json();
}