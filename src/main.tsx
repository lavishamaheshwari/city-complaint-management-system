import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/LoginPage.tsx";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <Login />
  </React.StrictMode>
);
