import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import  { addTodo, removeTodo, updateTodo } from "../features/mainSlice"
import { useSelector } from "react-redux"

const Home = () => {
  const [input, setinput] = useState('');
    const dispatch=useDispatch()
    const todos=  useSelector(state=> state.main.list)
    useEffect(() => {
      console.log(todos)
    }, [])
 const addToHandler=(e)=>{
  console.log(todos)
  e.preventDefault()
              dispatch(addTodo(input))
              setinput("")
  }  
  const deleteTodo=(id)=>{
    dispatch(removeTodo(id))
  } 
  const updateTodos=(id)=>{
    dispatch(updateTodo({
      id:id,
      text:"updated"
    }))
  } 
  return (
  <div>
    <div className="container">
      <h5>Hello, This is Home Page </h5>
    </div>
  </div>
  )  
}

export default Home 