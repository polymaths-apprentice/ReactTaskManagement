import { render } from "@testing-library/react";
import CreateTask from "./CreateTask";

jest.mock("../FormInput", () => () => <div>Mocked FormInput</div>);
jest.mock("../../../Models/TaskModel", () => {
  return class TaskMock {
    constructor() {
      this.id = "";
      this.title = "Task title";
      this.description = "Task description";
      this.date = new Date();
      this.category = "Task category";
      this.status = "Task status";
    }
  };
});
jest.mock("../../../Models/CategoryModel", () => {
  return class CategoryMock {
    constructor() {
      this.id = "";
      this.name = "category";
    }
  };
});

test("renders CreateTask with FormInput", () => {
  const { getByText } = render(<CreateTask />);
  const formInputElement = getByText(/Mocked FormInput/i);
  expect(formInputElement).toBeInTheDocument();
});
