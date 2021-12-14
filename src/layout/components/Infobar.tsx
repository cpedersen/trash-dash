type InfobarProps = {
  children: React.ReactNode
}

const Infobar = (props: InfobarProps) => {
  const { children } = props
  return <div>{children}</div>
}

export default Infobar
