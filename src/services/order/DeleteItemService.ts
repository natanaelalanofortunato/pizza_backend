import prismaClient from "../../prisma";
import { Response } from "express";

interface ItemRequest {
    item_id: string;
}

class DeleteItemService {
    async execute({ item_id }: ItemRequest, res: Response) {
        const checkItem = await prismaClient.item.findUnique({
            where: {
                id: item_id
            }
        })

        if (!checkItem) {
            return res.status(404).json('No ID found with this key or already been deleted');
        }

        const item = await prismaClient.item.delete({
            where: {
                id: item_id
            }
        })

        return res.status(200).json('Item deleted');
    }
}

export default DeleteItemService;