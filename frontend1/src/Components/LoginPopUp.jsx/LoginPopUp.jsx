import React from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {

    const[currState, setCurrState] = useState("sign up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      </form>
    </div>
  )
}

export default LoginPopUp
