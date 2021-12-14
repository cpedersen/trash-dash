import { Link } from 'react-router-dom'
type NavbarProps = {}

const Navbar = (props: NavbarProps) => {
  const isLoggedIn = true
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <button>Logout</button>
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
