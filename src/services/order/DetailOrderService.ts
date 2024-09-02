import prismaClient from "../../prisma";

interface Data {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: Data) {
        const items = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: {
                product: true,
                order: true
            }
        })

        return items;
    }
}

export default DetailOrderService;