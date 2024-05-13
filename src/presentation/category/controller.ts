import { Request, Response } from "express";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  create = (req: Request, res: Response) => {
    const [error, createCategory] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.categoryService.create(createCategory!)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error));
  };

  update = (req: Request, res: Response) => {
    return res.json({ message: "category create" });
  };

  delete = (req: Request, res: Response) => {
    return res.json({ message: "category create" });
  };

  findAll = (req: Request, res: Response) => {
    return res.json({ message: "category create" });
  };
}
