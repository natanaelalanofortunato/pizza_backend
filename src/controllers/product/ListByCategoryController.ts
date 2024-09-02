import ListByCategoryService from "../../services/product/ListByCategoryService";
import { Request, Response } from "express";

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const listByCategory = new ListByCategoryService();
        
        const products = await listByCategory.execute(req.query, res);

        return res.json({ product: products });
    }
}

export default ListByCategoryController;

