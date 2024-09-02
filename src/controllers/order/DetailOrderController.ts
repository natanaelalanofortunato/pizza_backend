import { Request, Response } from "express";
import DetailOrderService from "../../services/order/DetailOrderService";

class DetailOrderController {
    async handle(req: Request, res: Response) {
        const service = new DetailOrderService();

        const order_id = req.query.order_id as string;
        
        const detail = await service.execute({ order_id });

        return res.json(detail);
    }
}

export default DetailOrderController;