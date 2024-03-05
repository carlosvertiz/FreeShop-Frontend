import { useState } from 'react'

export function MenuQuantityHook({quantityModifier}){
  const [value, setValue] = useState("1 unidad")
  const [open, setOpen] = useState(false)

  function handleOptionClick(number) {
    quantityModifier({number})
    setValue(`${number} ${number === 1 ? 'unidad' : 'unidades'}`)
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