import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Wrapper from "./Wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper>
    {/* Higher Order Components : componenets which take componenets as props or arguments or return other componenets */}
    <App />
    <ToastContainer position="top-center" />
    {/* React Toastify configuration for using it */}
  </Wrapper>
);
