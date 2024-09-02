import prismaClient from "../../prisma";

interface OrderRequest {
    table: number,
    name: string
}

class CreateOrderService {
    async execute({ table, name }: OrderRequest) {
        const order = { table: table, name: name }

        const createOrder = await prismaClient.order.create({ data: order })

        return createOrder;
    }
}

export default CreateOrderService;