import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Config from "./pages/config";
import HomeUser from "./pages/homeuser";
import Shop from "./pages/shop";
import RecoverPassword from "./pages/recoverpassword";
import ChangePassword from "./pages/changePassword";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/configuration" element={<Config />} />
        <Route path="/homeuser" element={<HomeUser />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
   </>
  );
};

export default App;
