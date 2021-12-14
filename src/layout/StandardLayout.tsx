import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

type StandardLayoutProps = {
  children: React.ReactNode
}

const StandardLayout = (props: StandardLayoutProps) => {
  const { children } = props
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default StandardLayout
