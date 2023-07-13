import React from "react";
import CardHolder from "./CardHolders/CardHolder";
import styles from "./CategorySection.module.css";
import Container from "react-bootstrap/esm/Container";

import { useEffect, useState } from "react";
export default function CategorySection(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <Container className={styles.main}>
      {categories.map((category) => (
        <CardHolder key={category.id} category={category} />
      ))}
    </Container>
  );
}
