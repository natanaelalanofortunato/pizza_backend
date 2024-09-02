import { Request, Response } from "express";
import AddItemService from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;
        console.log(req.body)

        if ((!order_id || order_id === "") || (!product_id || product_id === "") || (!amount || amount === "")) {
            throw new Error('One or more fields are not informed');
        }

        const service = new AddItemService();

        const createdItem = await service.execute(
            {
                order_id,
                product_id,
                amount
            }
        )

        return res.json(createdItem);
    }
}

export default AddItemController;