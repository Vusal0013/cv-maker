import { FormPage } from "./components/form/FormPage";
import "./index.css";
import { R01 } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/form">Form</Link>
              <br />
              <Link to="/resume">Resume</Link>
            </>
          }
        />
        <Route path="/resume" element={<R01 />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
