import { Request, Response } from "express";
import DeleteItemService from "../../services/order/DeleteItemService";

class DeleteItemController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        if (!id) {
            throw new Error('No ID found on the request body');
        }

        const checkItem = new DeleteItemService();

        checkItem.execute({ item_id: id }, res);
    }
}

export default DeleteItemController;