import { Route, Routes } from "react-router-dom";
import HomeComponent from "../../HomeComponent/HomeComponent";
import CreateTask from "../../Form/Create Task/CreateTask";
import EditTask from "../../Form/Edit tasks/EditTask";
import NavBar from "../../NavbarComponent/NavBar";

export default function AppRoutes() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route />
      </Routes>
    </>
  );
}
