import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { ResumeProvider } from "./context/ResumeContext";
import { UserResumeProvider } from "./context/UserResumeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ResumeProvider>
          <UserResumeProvider>
            <App />
          </UserResumeProvider>
        </ResumeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
