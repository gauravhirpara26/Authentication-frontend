import Login from '@/pages/auth/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registerpage from '@/pages/auth/register/Registerpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
