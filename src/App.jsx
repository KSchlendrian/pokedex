import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Details from "./components/pages/Details/Details";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="details"
            element={<Details />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
