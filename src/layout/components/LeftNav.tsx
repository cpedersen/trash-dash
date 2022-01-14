type LeftbarProps = {
  children: React.ReactNode
}

const Leftbar = (props: LeftbarProps) => {
  const { children } = props
  return <div>{children}</div>
}

export default Leftbar
