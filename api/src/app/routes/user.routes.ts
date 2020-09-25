import { Router } from "express";

import { createUser, Login } from "../../controllers/user.controller";
import { createFood, getFood } from "../../controllers/food.controller";
import { createOrderfood } from '../../controllers/orderfood.controller';
import { createOrder } from './../../controllers/order.controller';


const router = Router();

// users (GET) lista
// users (POST) crear
// users/:id (GET) buscar por id
// users/:id (PUT) editar
// users/:id (DELETE) eliminar

//User
router.post("/user", createUser);
router.post("/login", Login);
//Food
router.post("/food", createFood);
router.get("/foods", getFood)
//Order
router.post("/order", createOrder);
//Orderfood
router.post("/orderfood", createOrderfood);



export default router;
