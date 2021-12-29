import { logout } from '@/api/authApi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

type NavbarProps = {}

const Navbar = (props: NavbarProps) => {
  const isLoggedIn = useSelector((state: RootState) => Boolean(state.user.user))

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
