import { useEffect, useState } from "react"
import { requestCategories } from '../Request/serverRequest.js'

export function MenuHook(){
  const [open, setOpen ] = useState(false)
  const [categories, setCategories] = useState("")

  useEffect(()=>{
    requestCategories()
    .then(response => response.json())
    .then(data =>{
      setCategories(data)} 
      )
    .catch( error => {
      console.error('An error occurred:', error)
    })
  },[])

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return {open, categories, handleMouseEnter, handleMouseLeave}
}