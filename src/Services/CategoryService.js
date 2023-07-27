//instance-based for easier testing
export default class CategoryService {
  async fetchCategories() {
    try {
      const response = await fetch("http://localhost:3001/categories");
      return await response.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  async fetchTasksForCategory(categoryId) {
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/category/${categoryId}`
      );
      return await response.json();
    } catch (error) {
      console.error(`Error fetching tasks for category ${categoryId}:`, error);
      return [];
    }
  }
}
