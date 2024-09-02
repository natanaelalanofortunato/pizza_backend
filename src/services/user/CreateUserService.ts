import prismaClient from '../../prisma/index'
import { hash } from 'bcryptjs'
import { Role } from '@prisma/client'
import { User } from '@prisma/client'

interface UserRequest extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
    name: string,
    email: string,
    password: string,
    role: Role;
    [key: string]: any; 
}

class CreateUserService {
    async execute(userData: UserRequest) {
        const { email, password, cross_origin } = userData;

        if(cross_origin === "create") {
            userData.role = Role.COMMON_USER;
        }

        console.log( { userData: userData });

        if (!email) {
            throw new Error("Email not inserted");
        }

        const userExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (userExist) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        userData.password = passwordHash;

        const user = await prismaClient.user.create({
            data: userData,
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        return user;
    }
}

export default CreateUserService;
