import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Auth/register'
import Login from './pages/Auth/Login'
import Forgotpassword from './pages/Auth/Forgotpassword'
import Verifyotp from './pages/Auth/Verifyotp'
import Resetpassword from './pages/Auth/Resetpassword'
import Verifyemail from './pages/Auth/Verifyemail'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<Forgotpassword />} />
          <Route path='/verify-otp' element={<Verifyotp />} />
          <Route path='/reset-password' element={<Resetpassword />} />
          <Route path='/verify-email' element={<Verifyemail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  )
}

export default App
