import Header from './components/Header'
import Footer from './components/Footer'

/* 
FullWidthLayout refers to a layout that does not include a nav on 
the left side of the screen.
*/

type FullWidthLayoutProps = {
  children: React.ReactNode
}

const FullWidthLayout = (props: FullWidthLayoutProps) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default FullWidthLayout
