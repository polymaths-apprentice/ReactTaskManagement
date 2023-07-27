import "./App.css";

import { useState, useEffect } from "react";
import AppRoutes from "./Components/Starting/AppRoutes/AppRoutes";
import { waitUntilLoaded } from "./Services/LoadingService";
import Loading from "./Components/Starting/LoadingComponent/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadComponent() {
      await waitUntilLoaded();
      setIsLoading(false);
    }
    loadComponent();
  }, []);

  return <div className="App">{isLoading ? <Loading /> : <AppRoutes />}</div>;
}

export default App;
