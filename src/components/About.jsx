import { NavLink } from "react-router-dom"
import Child from "./Child"
const About = () => {
              

  const changeName = (name) => {
    console.log('name changed', name)
  }
  return (
    <>
    <div>About</div>
    <NavLink to="/">Home</NavLink>
    <Child  message={"hi i am props"} onNameChange={changeName} />
  
    </>
  )
}

export default About