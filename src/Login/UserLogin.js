import React from 'react'
import LoginForm from './LoginForm'
import { NavLink, useLocation } from 'react-router-dom'
import style from './LoginLayout.module.css'
import animations from '../Animations/Animations.module.css'

const UserLogin = () => {
  const location = useLocation();
  return (
    <div className={`${style["login-container"]} ${animations["move-right"]}`}>
    { (<h1 className={style["login-type"]}>{location.pathname==="/auth/login"?"Login":"Signup"}</h1>)}
      <LoginForm />
      {location.pathname==="/auth/login"&&(<NavLink className={style["login-option"]} to={'/auth/signup'}>Signup?</NavLink>)}

    </div>
  )
}

export default UserLogin
