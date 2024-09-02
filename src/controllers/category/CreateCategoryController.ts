import { Request, Response, NextFunction } from "express";
import CreateCategoryService from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(req: Request, res: Response, next: NextFunction) {
        const createCategory = new CreateCategoryService();

        const category = await createCategory.execute(req.body); 

        return res.json(category);
    }
}

export default CreateCategoryController;