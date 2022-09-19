import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog";
import NavbarElement from "./Components/Navbar";

function App() {
  return (
    <div>
      <NavbarElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
