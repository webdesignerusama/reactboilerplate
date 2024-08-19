import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const User = () => {
    const parm = useLocation();
    useEffect(() => {
    
    console.log(parm)
    }, [parm])
    
  return (
    <div>
    <div className="container">
      <h5>Hello, This is User Page and this is a protected route. </h5>
    </div>
  </div>
  )
}

export default User