import { useEffect, useState } from "react"
import { requestProduct } from "../Request/serverRequest"

export function ItemCartHook({id, quantity, priceFunction, modifyQuantity, deleteObject}){
  const [quantityItem, setQuantityItem] = useState(quantity)
  const [item, setItem] = useState("")

  useEffect(()=>{
    requestProduct({id})
    .then(response => response.json())
    .then(data => {
      setItem(data[0])
      priceFunction(data[0].price*quantityItem)
      })
  },[])

  function quantityModification({num}){
    if (quantity == 1 && num<0){
      deleteItem()
      return
    }
    modifyQuantity({id, quantity:num})
    setQuantityItem(previusValue => previusValue + num)
    priceFunction(num*item.price)
  }

  function deleteItem(){
    deleteObject({id})
    priceFunction(-1*item.price*quantityItem)
  }
  return {quantityItem, item, quantityModification, deleteItem}
}