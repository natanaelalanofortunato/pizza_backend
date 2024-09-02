import prismaClient from "../../prisma";
import { Response } from "express";

class ListByCategoryService {
    async execute(params: {}, res: Response) {
        try {
            const query = {};
            let from = 0;
            let to = 24;
            let orderBy: { [key: string]: 'asc' | 'desc' } = { created_at: 'desc' };

            for (const key in params) {
                if (params[key] && key !== 'from' && key !== 'to' && key !== 'orderBy') {
                    query[key] = {
                        contains: params[key],
                        mode: 'insensitive'
                    };
                } else if (key === 'from') {
                    from = parseInt(params[key], 10);
                } else if (key === 'to') {
                    to = parseInt(params[key], 10);
                } else if (key === 'orderBy') {
                    const [field, order] = params[key].split(':');
                    orderBy = {
                        [field]: order as 'asc' | 'desc'
                    };
                }
            }

            const findByCategory = await prismaClient.product.findMany({
                skip: from,
                take: to,
                where: query,
                orderBy: orderBy
            });

            switch (findByCategory.length) {
                case 0:
                    return res.status(204).end();
                    break;
                default:
                    return res.json({ products: findByCategory });
            }

        } catch (error: any) {
            if (error instanceof Error && error.message.includes("Unknown argument")) {
                return res.status(400).json({
                    error: `Invalid query parameter provided: check if the query params are correct`,
                });
            }
            return res.status(500).json({
                error: 'Internal Server Error',
            });
        }
    }
}

export default ListByCategoryService;
