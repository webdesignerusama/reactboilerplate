import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const parm = useParams();
    useEffect(() => {
    
    console.log(parm)
    }, [parm])
    
  return (
    <div> i am {parm.name}</div>
  )
}

export default User