import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import CreateTask from "./Components/Form/Create Task/CreateTask";
import EditTask from "./Components/Form/Edit tasks/EditTask";
import Loading from "./Components/LoadingComponent/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return <Loading />; // Render the loading component
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
