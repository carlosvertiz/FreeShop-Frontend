import { FiltersContext } from '../../context/filter.jsx'
import { useState, useContext } from "react"

export function PriceFilterHook(){
  const [buttonState, setButtonState] = useState(true)
  const [error, setError] = useState("")
  const {filters, setFilters} = useContext(FiltersContext)

  function filterPrice(event){
    event.preventDefault()
    const form = event.currentTarget;
    const minimo = form.elements["minimo"].value
    const maximo = form.elements["maximo"].value
    if (minimo != "" && isNaN(minimo)){
      setError("minimo")
      return
    }
    if (maximo != "" && isNaN(maximo)){
      setError("maximo")
      return
    }
    setError("")
    setFilters({...filters, minPrice : minimo, maxPrice:maximo})  
  }

  function handleInputChange(event){
    const form = event.currentTarget;
    if (form.elements["minimo"].value || form.elements["maximo"].value){
      setButtonState(false)
      return
    }
    setButtonState(true)
  }
  return {buttonState, error, filterPrice, handleInputChange}
}