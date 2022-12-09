import React from 'react'
import { Link } from 'react-router-dom';
import echo_img from '../Images/echo_img.png'
import style from '../module_css/NavBar.module.css'

function NavBar() {
  return (
    <div className={style.container}>
        <div className={style.navbar}>
            <img src={echo_img} alt="" />
            <div className="navbar_links">
                <Link to='/'>Home</Link>
                <Link to='/'>Create</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar