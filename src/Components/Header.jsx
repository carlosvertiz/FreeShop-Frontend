import '../Styles/Header.css'
import cart from '../assets/cart-icon.png'
import { Dropdown } from "./Dropdown"
import { NavLink } from "react-router-dom"
import { InputSearch } from "./InputSearch.jsx"
import { MenuHook } from '../Hooks/MenuHook.jsx'

export function Header() {
  const {open, categories, handleMouseEnter, handleMouseLeave} = MenuHook()

  return (
    <>    
      <header className="pages-header">
        <div className="header-block">

          <InputSearch></InputSearch>
   

          <div className="menu" >
            <ul className="menu-list">
              <li className="menu-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <a  className="categories-text">
                  Categorías
                </a>
                <div 
                  className="dropdown-block"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  {open && <Dropdown items={categories}></Dropdown>}
                </div>
              </li>
              <li className="menu-item">
                  <a 
                    href="https://github.com/carlosvertiz" 
                    target="_blank"
                    rel="noreferrer">
                    Github
                  </a>
              </li>
              <li className="menu-item">
                  <a 
                    href="https://www.linkedin.com/in/carlosvertiz/" 
                    target="_blank"
                    rel="noreferrer">
                    Linkedin
                  </a>
              </li>
            </ul>
          </div>

          <NavLink to="cart" className="img-container">
            <img 
              className="cart-img"
              src = {cart} 
              alt= 'Carrito'/>
          </NavLink>

        </div>
      </header>
    </>

  )
}
