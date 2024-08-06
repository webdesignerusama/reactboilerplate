import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
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
    <>
    <div>About</div>
    <NavLink to="/about">About</NavLink>

    <form onSubmit={addToHandler}>
  <input type="text" placeholder="enter to do" value={input} onChange={(e)=>setinput(e.target.value)}/>

<button type="submit">add to do</button>
    </form>

    <ul>
      {
        todos.map((todo)=>
      
         <li key={todo.id}>{todo.text}  <button onClick={()=>deleteTodo(todo.id)}>delete</button> <button onClick={()=>updateTodos(todo.id)}>update</button>  </li>
     
       
        )
      }
    </ul>
    </>
  )  
}

export default Home 