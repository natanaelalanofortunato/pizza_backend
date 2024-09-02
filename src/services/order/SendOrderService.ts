import moment from "moment-timezone";
import prismaClient from "../../prisma";
import { Order } from "@prisma/client";

interface Data {
    data: Order
}

class SendOrderService {
    async execute({ data } : Data) {
        /* Verificar se de fato o moment-timezone é a melhor lib para isto */
        const brasiliaTimeISO = moment().tz("America/Sao_Paulo").subtract(3, 'hours').toISOString();

        const update = await prismaClient.order.update({
            where: {
                id: data.id,
            },
            data: {
                ...data,
                update_at: brasiliaTimeISO
            },
            select: {
                id: true,
                table: false,
                status: true,
                is_satisfied: true,
                draft: true,
                name: false,
                created_at: false,
                update_at: true
            }
        });

        return update;
    }
}

export default SendOrderService;
