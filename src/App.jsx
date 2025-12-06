import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Config from "./pages/config";
import HomeUser from "./pages/homeuser";
import Shop from "./pages/shop";
import RecoverPassword from "./pages/recoverpassword";
import ChangePassword from "./pages/ChangePassword";
import AdminDashboard from "./pages/admindashboard";
import UserAdmin from "./pages/useradmin";

import Header from "./components/Header";

const App = () => {
  const location = useLocation();

  // Rutas donde NO queremos mostrar el header
  const noHeaderPaths = ["/admin-dashboard", "/user-admin"];
  const hideHeader = noHeaderPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/")
  );

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/configuration" element={<Config />} />
        <Route path="/homeuser" element={<HomeUser />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-admin" element={<UserAdmin />} />
      </Routes>
    </>
  );
};

export default App;