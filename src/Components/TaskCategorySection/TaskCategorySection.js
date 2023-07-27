import CardHolder from "./CardHolders/CardHolder";
import styles from "./TaskCategorySection.module.css";
import Container from "react-bootstrap/esm/Container";
import CategoryRepository from "../../Repositories/CategoryRepository";
import { useEffect, useState } from "react";

export default function TaskCategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categoriesData = await CategoryRepository.getCategories();
    setCategories(categoriesData);
  };

  return (
    <Container className={styles.main}>
      {categories.map((category) => (
        <CardHolder key={category.id} category={category} />
      ))}
    </Container>
  );
}
