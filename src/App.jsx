import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Auth/pages/register'
import Login from './Auth/pages/Login'
import Forgotpassword from './Auth/pages/Forgotpassword'
import Verifyotp from './Auth/pages/Verifyotp'
import Resetpassword from './Auth/pages/Resetpassword'
import Verifyemail from './Auth/pages/Verifyemail'
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
