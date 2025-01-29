import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // font awesome icons
import "./assets/HeaderStyle.css"; // Your custom styles
import "./assets/ProductCategories.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
    <Home></Home>    
    </div>
  );
}

export default App;
