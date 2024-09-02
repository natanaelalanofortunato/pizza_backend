import prismaClient from "../../prisma";
import { Response } from "express";

class ListOrderService {
    async execute(params: {}, res: Response) {
        try {
            const query = {};
            let orderBy: { [key: string]: 'asc' | 'desc' } = { created_at: 'desc' };

            for (const key in params) {
                if (params[key] && key !== 'orderBy') {
                    if (params[key] === 'false') {
                        query[key] = false;
                    } else if (params[key] === 'true') {
                        query[key] = true;
                    } else {
                        query[key] = {
                            contains: params[key],
                            mode: 'insensitive'
                        };
                    }
                } else if (key === 'orderBy') {
                    const [field, order] = params[key].split(':');
                    orderBy = {
                        [field]: order as 'asc' | 'desc'
                    };
                }
            }

            const request = await prismaClient.order.findMany({
                where: query,
                orderBy: orderBy,
                select: {
                    id: true,
                    table: true,
                    status: true,
                    draft: true,
                    name: true,
                    update_at: true
                }
            });

            return request;
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default ListOrderService;
