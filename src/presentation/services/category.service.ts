import { promises } from "dns";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryModel } from "../../database/mongodb/models/category.model";
import { CategoryMaper } from "../../domain/mapers/category.mapers";
export class CategoryService {
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const {name}= createCategoryDto;
    try {
      const exist = await CategoryModel.findOne({ name });
      if (exist) throw Error("error");
      const Category = await CategoryModel.create(createCategoryDto);
      if (!Category) throw Error("error");
      await Category.save();
      return CategoryMaper.fromEntity(Category);
    } catch (error) {
        throw error;
    }
}

  update() {}
  delete() {}
  findOne() {}
  findAll() {}
}
