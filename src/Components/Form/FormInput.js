import styles from "./FormInput.module.css";
import TaskCard from "../TaskCategorySection/TaskCard/TaskCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import TaskDataRepository from "../../Repositories/TaskDataRepository";
import CategoryRepository from "../../Repositories/CategoryRepository";
import Category from "../../Models/CategoryModel";
import Task from "../../Models/TaskModel";
const currentDate = new Date().toISOString().split("T")[0];

export default function FormInput({ taskObj, category }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoriesWithRepository = async () => {
      try {
        const data = await CategoryRepository.getCategories();

        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (taskObj.id !== "") {
      setIsEditing(true);
    }

    fetchCategoriesWithRepository();
  }, []);

  const handleCategoryChange = (event) => {
    const categoryPicked = event.target.value;

    const category = categories.find(
      (category) => category.name === categoryPicked
    );

    setSelectedCategory(category.id);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEditing) {
      await handleCreateTask();
    } else {
      await handleUpdateTask();
    }
  };

  const handleCreateTask = async () => {
    const data = {
      title: taskName,
      description: description,
      dueDate: selectedDate,
      categoryId: selectedCategory,
      status: "Created",
    };

    const createdTask = await TaskDataRepository.createTask(data);

    if (createdTask) {
      // Handle successful update
      navigate("/home");
    } else {
      // Handle error response, pop up a notification
    }
  };

  const handleUpdateTask = async () => {
    const data = {
      title: taskName,
      description,
      dueDate: selectedDate,
      categoryId: selectedCategory,
      status: selectedStatus,
    };

    const updatedTask = await TaskDataRepository.updateTask(taskObj.id, data);

    if (updatedTask) {
      // Handle successful update, Display a pop-up or modal
      navigate("/home");
    } else {
      // Handle error response
    }
  };

  const handleDelete = async () => {
    const deleted = await TaskDataRepository.deleteTask(taskObj.id);

    if (deleted) {
      // Handle successful deletion with popup
      navigate("/home");
    } else {
      // Handle error response  with popup
    }
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Container className={styles.customContainer}>
      <TaskCard taskObj={taskObj} category={category}></TaskCard>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTaskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTaskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            min={currentDate} // Set min attribute to today's date
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please select a future date.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDropdown">
          <Form.Label>Categories</Form.Label>
          <Form.Control as="select" onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category.id}>{category.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        {isEditing && (
          <Form.Group className="mb-3" controlId="formBasicDropdown">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" onChange={handleStatusChange}>
              <option>Assigned</option>
              <option>Completed</option>
            </Form.Control>
          </Form.Group>
        )}

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            {isEditing ? "Save" : "Create"}
          </Button>

          {isEditing && (
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}

FormInput.propTypes = {
  taskObj: PropTypes.shape(Task).isRequired,
  category: PropTypes.instanceOf(Category).isRequired,
};
