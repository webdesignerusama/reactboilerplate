import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import  { getItems,postItems } from "../features/mainSlice"
import { useSelector } from "react-redux"

const Home = () => {
  const [input, setinput] = useState('');
    const dispatch=useDispatch()
    const todos=  useSelector(state=> state.main.list)
    const items = useSelector((state) => state.main.item);
    
  useEffect(() => {
    // Fetch items when the component mounts
    
       console.log(dispatch(getItems()))
         console.log(items)
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await dispatch(getItems()) 
  //       console.log('Items fetched successfully');
  //     } catch (err) {
  //       console.error('Error fetching items:', err);
  //     }
  //   };

  //   fetchData();
  // }, [dispatch]);
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