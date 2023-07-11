import "./App.css";

import Loading from "./Components/LoadingComponent/Loading";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavbarComponent/NavBar";
import UpperBody from "./Components/UpperBody/UpperBody";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="App">
      <NavBar></NavBar>
      <UpperBody></UpperBody>
    </div>
  );
}

export default App;
