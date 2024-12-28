import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <AppRoutes />
      <Navbar />
    </div>
  );
}

export default App;
