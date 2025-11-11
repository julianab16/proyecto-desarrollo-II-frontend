import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import RecoverPassword from './pages/RecoverPassword'
import ChangePassword from './pages/ChangePassword'
// Importa otros componentes cuando los crees:
// import Login from './pages/Login'
// import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/recover-password" element={<RecoverPassword/>} />
      <Route path="/change-password" element={<ChangePassword/>} />
      {/* Agrega más rutas aquí cuando crees los componentes:
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      */}
    </Routes>
  )
}

export default App