import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

/* 
StandardLayout refers to a layout that includes a nav on the left
side of the screen, along with 2 columns of customer facing data. 
*/

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
