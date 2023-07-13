import React from "react";
import CardHolder from "./CardHolders/CardHolder";
import styles from "./LowerBody.module.css";
import Container from "react-bootstrap/esm/Container";
export default function LowerBody(props) {
  return (
    <Container className={styles.main}>
      <CardHolder></CardHolder>
      <CardHolder></CardHolder>
      <CardHolder></CardHolder>
    </Container>
  );
}
