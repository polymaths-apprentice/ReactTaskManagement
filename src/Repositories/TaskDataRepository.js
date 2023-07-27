import TaskService from "../Services/TaskService";
import Task from "../Models/TaskModel";
import Category from "../Models/CategoryModel";
class TaskDataRepository {
  async getTaskData() {
    try {
      const tasksData = await TaskService.fetchAllTask();
      return tasksData.map(
        (task) =>
          new Task(
            task.id,
            task.title,
            task.description,
            task.dueDate,
            task.categoryId,
            task.status
          )
      );
    } catch (error) {
      console.error("Error getting task data:", error);
      throw error;
    }
  }

  async getTaskById(taskId) {
    try {
      const { taskObject, categoryObject } = await TaskService.fetchTaskById(
        taskId
      );

      const task = new Task(
        taskObject.id,
        taskObject.title,
        taskObject.description,
        taskObject.dueDate,
        taskObject.categoryId,
        taskObject.status
      );

      const category = new Category(categoryObject.id, categoryObject.name);

      return { task, category };
    } catch (error) {
      console.error(`Error fetching tasks for taskId ${taskId}:`, error);
      return [];
    }
  }
  async getTasksByCategory(categoryId) {
    try {
      const tasksData = await TaskService.fetchTasksByCategory(categoryId);
      console.log(tasksData);
      return tasksData.map(
        (task) =>
          new Task(
            task.id,
            task.title,
            task.description,
            task.dueDate,
            task.categoryId,
            task.status
          )
      );
    } catch (error) {
      console.error(`Error fetching tasks for category ${categoryId}:`, error);
      return [];
    }
  }

  async createTask(data) {
    return await TaskService.createTask(data);
  }

  async updateTask(taskId, data) {
    return await TaskService.updateTask(taskId, data);
  }

  async deleteTask(taskId) {
    return await TaskService.deleteTask(taskId);
  }
}

export default new TaskDataRepository();
