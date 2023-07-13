import React, { useEffect, useState } from "react";
import NavBar from "../../NavbarComponent/NavBar";
import { useParams } from "react-router-dom";
import FormInput from "../Form";

export default function EditTask(props) {
  const { id } = useParams();

  const [taskObj, setTaskObj] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const taskResponse = await fetch(`http://localhost:3001/tasks/${id}`);
        const task = await taskResponse.json();

        const categoryResponse = await fetch(
          `http://localhost:3001/categories/${task.categoryId}`
        );
        const data = await categoryResponse.json();

        console.log("Test test test category");
        setTaskCategory(data);
        setTaskObj(task);

        console.log(taskObj);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching task details:", error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };

    fetchTaskDetails();
  }, []);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div>Loading...</div> // Display a loading state or placeholder
      ) : (
        <FormInput taskObj={taskObj} taskCategory={taskCategory} />
      )}
    </>
  );
}
