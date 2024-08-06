
import { useState } from "react"
import { useEffect } from "react";
const Child = (prop) => {
  const [name, setName] = useState('hamza');
  const [first, setfirst] = useState({name:'hamza'})
  
const [arr, setarr] = useState([])
  // useEffect(() => {
  //   console.log(name)
  // }, [])
 useEffect(() => {
  // alert(name)
  console.log(first) 
  setfirst({...first, name:'usama'})
  // setfirst(prev=>({...prev, name:'umer'}))
  setarr([...arr, 'hi i am array'])
  console.log(first)
 }, [])

 useEffect(() => {
  console.log(first.name)
 
   
 }, [first.name])
 
 
  const changeItem = () => {
    prop.onNameChange('hamza1')
  }
 
        
        
     
  return (
    <>
    <div>{prop.message}</div>
    <button onClick={changeItem}>change items</button>
    <h5>{name}</h5>
    <h5>{first.name}</h5>
    </>
  )
}

export default Child