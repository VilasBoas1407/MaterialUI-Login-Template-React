import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<Login />} path="/" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
