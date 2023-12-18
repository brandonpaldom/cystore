export default function Layout(props) {
  return (
    <>
      {props.children}
      {props.create}
      {props.edit}
      {props.delete}
    </>
  )
}
