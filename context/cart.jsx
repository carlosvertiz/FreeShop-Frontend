import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
  const [cart, setCart] = useState([])

  function modifyQuantity({id, quantity}){
    const itemIndex = cart.findIndex(item => item.id == id)
    if (itemIndex != -1 ){
      const updatedCart = [...cart]
      updatedCart[itemIndex].quantity += quantity
      setCart(updatedCart)
    } else{
      setCart([...cart, {id, quantity}])
    }
  }

  function deleteItem({id}){
    const newCart = cart.filter(item => item.id != id)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      modifyQuantity,
      deleteItem
    }} >
      {children}
    </CartContext.Provider>
  )
}