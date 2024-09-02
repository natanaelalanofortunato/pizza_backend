import prismaClient from "../../prisma";
import { Response } from "express";

interface OrderRequest {
    order_id: string;
}

class DeleteOrderService {
    async execute({ order_id }: OrderRequest, res: Response) {
        const checkOrder = await prismaClient.order.findUnique({
            where: {
                id: order_id
            }
        })

        if (!checkOrder) {
            return res.status(404).json('No ID found with this key or already been deleted');
        }

        const order = await prismaClient.order.delete({
            where: {
                id: order_id,
            }
        })

        return res.status(200).json('Order deleted');
    }
}

export default DeleteOrderService;