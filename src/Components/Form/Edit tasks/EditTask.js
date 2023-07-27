import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormInput from "../FormInput";
import Loading from "../../Starting/LoadingComponent/Loading";
import TaskDataRepository from "../../../Repositories/TaskDataRepository";

export default function EditTask() {
  const { id } = useParams();

  const [taskObj, setTaskObj] = useState(null);
  const [taskCategory, setTaskCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const { task, category } = await TaskDataRepository.getTaskById(id);

        setTaskObj(task);
        setTaskCategory(category);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchTaskDetails();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <FormInput taskObj={taskObj} category={taskCategory} />
      )}
    </>
  );
}
