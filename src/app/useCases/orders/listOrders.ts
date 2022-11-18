import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // -1 ordenaçao desc - decrecente- do mais velhor pro mais novo OU 1 para ordenar do mais novo pro mais velho
      .populate('products.product');

    res.json(orders)
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
}
