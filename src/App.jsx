import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/register'
import Config from './pages/config'
import HomeUser from './pages/homeuser'
import Shop from './pages/shop'
import RecoverPassword from './pages/recoverpassword'
import ChangePassword from './pages/changePassword'
// import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/configuration" element={<Config />} />
      <Route path="/homeuser" element={<HomeUser/>} />
      <Route path="/shop" element={<Shop/>} /> 
      <Route path="/recover-password" element={<RecoverPassword/>} />
      <Route path="/change-password" element={<ChangePassword/>} />
      
      {/* <Route path="/dashboard" element={<Dashboard />} />  */}
      
    </Routes>
  )
}

export default App