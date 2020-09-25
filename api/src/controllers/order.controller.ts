import { Request, Response } from "express";
import { Order } from "../models/order.model";

//TODO crear las demas tablas para poder crear una orden
export const createOrder = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log(req.body);

  const { infoOrder, totalToPay, user } = req.body;

  console.log(req.body);

  const result = await Order.create({
    data: {
      user:{
        connect : { id : user }
      },
      infoOrder,
      totalToPay
    },
    include: {
      user: true
    },
  }).catch((e) => {
    console.log(e);
  });
  return res.json(result);
};

export const totalToPay =  () => {

  
}
