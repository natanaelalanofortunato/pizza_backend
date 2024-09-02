import { Request, Response } from "express";
import SendOrderService from "../../services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        const data = req.body;

        const service = new SendOrderService();

        try {
            const updatedOrder = await service.execute({ data });
            return res.json(updatedOrder);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default SendOrderController;
