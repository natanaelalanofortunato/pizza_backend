import { Request, Response } from "express";
import ListOrderService from "../../services/order/ListOrderService";

class ListOrderController {
    async handle(req: Request, res: Response) {
        const query = new ListOrderService();

        try {
            console.log(req.query);
            const order = await query.execute(req.query, res);

            return res.json(order);
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default ListOrderController;
