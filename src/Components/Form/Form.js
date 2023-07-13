import React from "react";
import styles from "./Formmodule.module.css";
import TaskCard from "../CategorySection/Card/TaskCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
const currentDate = new Date().toISOString().split("T")[0];

export default function FormInput({ taskObj, taskCategory }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    if (taskObj) {
      const { title: defaultTaskName, description: defaultDescription } =
        taskObj;

      setTaskName(defaultTaskName);
      setDescription(defaultDescription);

      if (taskObj.id !== "") {
        setIsEditing(true);
      }
    }

    fetchCategories();
  }, []);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isEditing) {
      const data = {
        title: taskName,
        description: description,
        dueDate: selectedDate,
        categoryId: selectedCategory,
        status: "Created",
      };

      console.log(data);
      console.log("POST POST POST POST  ");

      try {
        const response = await fetch("http://localhost:3001/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          //TODO: Handle successful update
          navigate("/home");
        } else {
          //TODO: Handle error response
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    } else {
      const data = {
        title: taskName,
        description,
        dueDate: selectedDate,
        categoryId: selectedCategory,
        status: selectedStatus,
      };

      console.log(data);
      console.log("PUT PUT PUT PUT ");

      try {
        const response = await fetch(
          `http://localhost:3001/tasks/${taskObj.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          //TODO: Handle successful update, Display a pop-up or modal
          navigate("/home");
        } else {
          //TODO: Handle error response
        }
      } catch (error) {
        console.error("Error updating task:", error);
      }
    }
  };

  const handleCategoryChange = (event) => {
    const categoryPicked = event.target.value;

    const category = categories.find(
      (category) => category.name === categoryPicked
    );

    setSelectedCategory(category.id);
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/${taskObj.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Handle successful deletion
        navigate("/home");
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error("Error deleting task:", error);
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
      <TaskCard task={taskObj} category={taskCategory}></TaskCard>
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
          <Form.Label>Dropdown</Form.Label>
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
