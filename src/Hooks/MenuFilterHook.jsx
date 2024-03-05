import { useState, useContext } from 'react'
import { FiltersContext } from '../../context/filter.jsx'

export function MenuFilterHook(){
  const {filters, setFilters} = useContext(FiltersContext)

  const [value, setValue] = useState("Más relevantes")
  const [open, setOpen] = useState(false)

  function handleOptionClick(event) {
    const text = event.target.textContent
    setValue(text)  
    if (text.includes("Precio")){
      
      if (text.includes("Mayor")){
        setFilters({...filters, sortColumn: "price", sort:"DESC"})
      } else{
        setFilters({...filters, sortColumn: "price", sort:"ASC"})
      }
    } else {
      setFilters({...filters, sortColumn: "rating_rate", sort:"DESC"})  
    }
  }

  function menuAction(){
    if (open){
      setOpen(false)
      return
    }
    setOpen(true)
  }
  return {value, open, handleOptionClick, menuAction}
}