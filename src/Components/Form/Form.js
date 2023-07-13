import React from "react";
import styles from "./Formmodule.module.css";
import TaskCard from "../LowerBody/Card/TaskCard";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";

const currentDate = new Date().toISOString().split("T")[0];

export default function FormInput({
  initialTaskName = "",
  initialDescription = "",
  onSubmit,
  isEditing,
}) {
  const [taskName, setTaskName] = useState(initialTaskName);
  const [description, setDescription] = useState(initialDescription);
  const [selectedDate, setSelectedDate] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ taskName, description, selectedDate });
  };

  return (
    <Container className={styles.customContainer}>
      <TaskCard></TaskCard>
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
          <Form.Control as="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          {isEditing ? "Save" : "Create"}
        </Button>
      </Form>
    </Container>
  );
}
