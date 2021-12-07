import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { WithUserAuth } from './components/WithUserAuth'

const Home = lazy(() => import('@/views/home/Home'))
const Register = lazy(() => import('@/views/register/Register'))
const Login = lazy(() => import('@/views/login/Login'))

function App() {
  return (
    <div className="">
      <Router>
        <WithUserAuth>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </WithUserAuth>
      </Router>
    </div>
  )
}

export default App
