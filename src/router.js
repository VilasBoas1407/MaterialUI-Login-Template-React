import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<Login />} path="/" exact />
        <Route element={<Register />} path="/register" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
