import { Orderfood } from './../models/orderfood.model';
import { User } from './../models/user.model';
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();


// TODO notificar al usuario cuando haga una orden
export const createUser = async (
  req: Request,
  res: Response
):Promise<Response> =>{
  //const password = bcrypt.hashSync(req.body.password, 8);
  
  const { firstName, 
          lastName, 
          email,
          password
        } = req.body;
  const result = await User.create({
    data: {
      firstName,
      lastName,
      email,
      password
     }
  }).catch((e) => {
    console.log(e);
  });

  return res.json(result);
};

export const getUser = async (
  req: Request,
  res: Response
) =>{
  const user = await prisma.user.findMany({
    where: { id: 1}
  })
  return res.json(user)
}