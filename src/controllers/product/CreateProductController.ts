import { Request, Response } from "express";
import CreateProductService from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, banner, category_id } = req.body;

        if (!req.file && !category_id) {
            throw new Error('File not informed');
        } else {

            const { originalname, filename: banner } = req.file;

            const createProduct = new CreateProductService;

            const product = await createProduct.execute(
                {
                    name,
                    price,
                    description,
                    banner,
                    category_id
                }
            );

            return res.json(product);
        }
    }
}

export default CreateProductController;