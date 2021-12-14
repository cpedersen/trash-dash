import StandardLayout from './StandardLayout'
import FullWidthLayout from './FullWidthLayout'
type LayoutProps = {
  children: React.ReactNode
}

const layoutMap = {
  standard: StandardLayout,
  full: FullWidthLayout,
}

const Layout = (props: LayoutProps) => {
  const layout = 'standard'
  const { children } = props
  const CurrentLayout = layoutMap[layout] || layoutMap.standard
  return (
    <div>
      <CurrentLayout>{children}</CurrentLayout>
    </div>
  )
}

export default Layout
