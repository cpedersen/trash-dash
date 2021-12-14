import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { WithUserAuth } from './components/WithUserAuth'
import Layout from '@/layout/Layout'
const Home = lazy(() => import('@/views/home/Home'))
const Register = lazy(() => import('@/views/register/Register'))
const Login = lazy(() => import('@/views/login/Login'))

/*

Use onAuthStateChanged from firebase to respond to any user changes, e.g. signin, signup, logout, update, etc.
If you have a user, fetch user's profile from Firestore and set it in the usersSlice using the setUser action.

*/

function App() {
  return (
    <div className="">
      <Router>
        <WithUserAuth>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Suspense>
          </Layout>
        </WithUserAuth>
      </Router>
    </div>
  )
}

export default App
