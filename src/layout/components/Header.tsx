import Navbar from './Navbar'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <div className="flex justify-between items-center p-4 bg-teal-900">
      <div>I'm the header</div>
      <Navbar />
    </div>
  )
}

export default Header
