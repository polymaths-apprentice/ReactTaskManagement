import React from "react";
import NavBar from "../NavbarComponent/NavBar";
import UpperBody from "../UpperBody/UpperBody";
import LowerBody from "../LowerBody/LowerBody";

export default function HomeComponent(props) {
  return (
    <>
      <NavBar></NavBar>
      <UpperBody></UpperBody>
      <LowerBody></LowerBody>
    </>
  );
}
