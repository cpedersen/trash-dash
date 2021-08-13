import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </Switch>
          </Suspense>
        </WithUserAuth>
      </Router>
    </div>
  )
}

export default App
