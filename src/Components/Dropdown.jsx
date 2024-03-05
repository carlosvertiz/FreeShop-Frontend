import '../Styles/Dropdown.css'
import { FiltersContext } from '../../context/filter.jsx'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'


export function Dropdown({items}) {
  const {filters, setFilters} = useContext(FiltersContext)

  function filterCategory(event){
    const category = event.target.textContent
    if (category == "All"){
      setFilters({...filters, category : ""})  
      return
    }
  
    setFilters({...filters, category})  
  }

  return (
    <ul className="dropdown-menu">
        <NavLink
          to = "/" 
          onClick={filterCategory}
          key= "0"
          className="menu-items">
          All
        </NavLink>
      {items.map((item, index) => (
        <NavLink 
          to = "/" 
          onClick={filterCategory}
          key={index}
          className="menu-items">
          {item}
        </NavLink>
      ))}
    </ul>
  )
}