import React from 'react'
import searchImg from "@i/icons/search.svg";
import logoImg from "@i/icons/Logo.svg";
import { router } from '../router';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
        <div className="container">
            <nav className="header__nav">
                <a href="" className="logo"><img src={logoImg} alt="" /></a>
                <ul className="header__list">
                    {
                        router.map((route,index)=><li key={index} ><NavLink to={route.path} className="header__link">{route.name}</NavLink></li>)
                    }
                    
                    
                    <li><a href="" className="header__link"><img src={searchImg} alt="" /></a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header