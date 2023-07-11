import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

import styles from "./NavBar.module.css";

export default function NavBar(args) {
  return (
    <div>
      <Navbar expand="md" className={styles.navbar}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mr-auto ${styles.navLinks}`}>
              <Nav.Link href="#home">Your Tasks</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
            </Nav>
            <div className={styles.right}>
              <Button variant="outline-light" className={styles.addButton}>
                + Add
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={styles.line}></div>
    </div>
  );
}
