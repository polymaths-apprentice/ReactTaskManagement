import CategoryService from "../Services/CategoryService";
import Category from "../Models/CategoryModel";
//instance-based repo so we can have the flexibility to share state between(cache and such)
class CategoryRepository {
  constructor() {
    this.categoryService = new CategoryService();
  }

  async getCategories() {
    const categoryData = await this.categoryService.fetchCategories();

    return categoryData.map(
      (category) => new Category(category.id, category.name)
    );
  }

  async getTasksForCategory(categoryId) {
    return await this.categoryService.fetchTasksForCategory(categoryId);
  }
}

export default new CategoryRepository();
