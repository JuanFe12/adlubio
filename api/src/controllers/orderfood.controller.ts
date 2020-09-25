import { Request, Response } from "express";
import { Orderfood } from '../models/orderfood.model'

export const createOrderfood = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { order, food} = req.body;
  
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


/*export const quantityfood = (
  req: Request,
  res: Response
) => {
  const { quantityfood } = req.body;
  const result = await Orderfood.create({
    data: {
      quantityfood
    }
  }).catch((e) => {
    console.log(e);
  });

  return res.json(result);

}*/