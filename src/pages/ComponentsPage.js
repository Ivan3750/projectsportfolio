


const Greeting = props =>{
  return (
    <h1>Hello! {props.name}</h1>
  )
}

const Message = props =>{
  return (
    <p>{props.txt}</p>
  )
}
const Button = props => {
  return (
    <button onClick={props.onClick}>Click Me</button>
  )
}

function ComponentsPage() {
  const handleClick = () => {
    alert("Button was clicked!")
  }
  return (
    <div>
    <Greeting name="Ivan" />
    <Message txt="This is a custom message!" />
    <Button onClick={handleClick} />
  </div>  )
}

export default ComponentsPage;