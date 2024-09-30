// src/App.js
import React from "react";
import Start from "./Start.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for default styling


import { AdminProvider } from "./Context/AdminContext.js";

function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <Start />
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;