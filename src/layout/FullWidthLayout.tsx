import Header from './components/Header'
import Footer from './components/Footer'

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
