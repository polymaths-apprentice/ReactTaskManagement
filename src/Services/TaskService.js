class TaskService {
  async fetchTaskById(id) {
    try {
      const taskResponse = await fetch(`http://localhost:3001/tasks/${id}`);
      const taskObject = await taskResponse.json();

      const categoryResponse = await fetch(
        `http://localhost:3001/categories/${taskObject.categoryId}`
      );
      const categoryObject = await categoryResponse.json();

      return { taskObject, categoryObject };
    } catch (error) {
      console.error("Error fetching task details:", error);
      throw error;
    }
  }

  async fetchAllTask() {
    try {
      const response = await fetch("http://localhost:3001/tasks");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching task data:", error);
      throw error;
    }
  }

  async fetchTasksByCategory(categoryId) {
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/category/${categoryId}`
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(`Error fetching tasks for category ${categoryId}:`, error);
      return [];
    }
  }

  async createTask(data) {
    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error creating task:", error);
      return null;
    }
  }

  async updateTask(taskId, data) {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return response.json();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error updating task:", error);
      return null;
    }
  }

  async deleteTask(taskId) {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      return false;
    }
  }
}

export default new TaskService();
