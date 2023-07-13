import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./Filters.module.css";

export default function Filters() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchOptions()
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.customToggle}>Filter</Dropdown.Toggle>

      <Dropdown.Menu className={styles.customMenu}>
        {options.map((option) => (
          <Dropdown.Item
            key={option}
            active={option === selectedOption}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

function fetchOptions() {
  return Promise.resolve(["Option 1", "Option 2", "Option 3"]);
}
