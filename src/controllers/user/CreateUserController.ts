import { Request, Response } from 'express';
import CreateUserService from '../../services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const userData = req.body;

        const createUserService = new CreateUserService();

        const userCreated = await createUserService.execute(userData);

        return res.json({ user: userCreated });
    }
}

export default CreateUserController;
