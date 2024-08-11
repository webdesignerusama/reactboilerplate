import { NavLink } from "react-router-dom"
import Child from "./Child"
const About = () => {
              

  const changeName = (name) => {
    console.log('name changed', name)
  }
  return (
    <div>
    <div className="container">
      <h5>Hello, This is Login Page </h5>
    </div>
  </div>
  )
}

export default About