import FormInput from "../FormInput";
import Task from "../../../Models/TaskModel";
import Category from "../../../Models/CategoryModel";

export default function CreateTask() {
  const taskObj = new Task(
    "",
    "Task title",
    "Task description",
    new Date(),
    "Task category",
    "Task status"
  );

  const taskCategory = new Category("", "category");

  return (
    <>
      <FormInput taskObj={taskObj} category={taskCategory} />
    </>
  );
}
