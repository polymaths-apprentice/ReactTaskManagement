//instance-based for easier testing
export default class CategoryService {
  async fetchCategories() {
    try {
      const cache = await caches.open("my-cache");
      const cachedResponse = await cache.match(
        "http://localhost:3001/categories"
      );

      if (cachedResponse) {
        const cachedEtag = cachedResponse.headers.get("ETag");
        const cachedLastModified = cachedResponse.headers.get("Last-Modified");

        const headers = {};

        if (cachedEtag) {
          headers["If-None-Match"] = cachedEtag;
        }

        if (cachedLastModified) {
          headers["If-Modified-Since"] = cachedLastModified;
        }

        const response = await fetch("http://localhost:3001/categories", {
          headers,
        });

        if (response.status === 304) {
          const clonedCachedResponse = await cachedResponse.clone();
          const cachedData = await clonedCachedResponse.json();
          return cachedData;
        } else {
          const responseData = await response.clone().json();
          cache.put("http://localhost:3001/categories", response.clone());
          return responseData;
        }
      } else {
        const response = await fetch("http://localhost:3001/categories");
        const responseData = await response.clone().json();
        cache.put("http://localhost:3001/categories", response.clone());
        return responseData;
      }
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
