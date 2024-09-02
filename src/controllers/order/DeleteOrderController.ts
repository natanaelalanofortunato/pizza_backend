import { Request, Response } from "express";
import DeleteOrderService from "../../services/order/DeleteOrderService";

class DeleteOrderController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        if (!id) {
            throw new Error('No ID found on the request body');
        }

        const checkOrder = new DeleteOrderService();

        checkOrder.execute({ order_id: id }, res);
    }
}

export default DeleteOrderController;