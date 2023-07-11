import logo from "./logo.svg";
import "./App.css";

import Loading from "./Components/LoadingComponent/Loading";
import { useState, useEffect } from "react";

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
      <Loading></Loading>
    </div>
  );
}

export default App;
