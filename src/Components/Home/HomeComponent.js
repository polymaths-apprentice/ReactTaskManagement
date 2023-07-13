import React from "react";
import NavBar from "../NavbarComponent/NavBar";
import UpperBody from "../UpperBody/UpperBody";
import CategorySection from "../CategorySection/CategorySection";

export default function HomeComponent(props) {
  return (
    <>
      <NavBar></NavBar>
      <UpperBody></UpperBody>
      <CategorySection></CategorySection>
    </>
  );
}
