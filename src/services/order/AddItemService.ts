import prismaClient from "../../prisma";

interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService {
    async execute({ order_id, product_id, amount }: ItemRequest) {
        const orderCheck = await prismaClient.order.findFirst({
            where: {
                id: order_id
            }
        })

        const productCheck = await prismaClient.product.findFirst({
            where: {
                id: product_id
            }
        })

        if (!orderCheck) {
            throw new Error(`No order was found with the given ID ${order_id}`);
        }

        if (!productCheck) {
            throw new Error(`No product was found with the given ID ${product_id}`);
        }

        if (typeof amount !== 'number') {
            throw new Error('You must inform a correct number');
        }

        const item = await prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        })

        return item;
    }
}

export default AddItemService;