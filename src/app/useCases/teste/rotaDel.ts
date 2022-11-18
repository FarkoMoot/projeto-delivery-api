import { Request, Response } from "express";

import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

export async function rotaDel(req: Request, res: Response) {
  await Category.deleteMany()
  await Product.deleteMany()

  res.send('ok')
}
