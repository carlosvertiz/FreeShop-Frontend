import { useContext, useEffect, useState } from "react"
import { requestProduct } from "../Request/serverRequest"
import { useParams } from 'react-router-dom'
import { CartContext } from "../../context/cart.jsx"

export function ProductContentHook(){
  const [product, setProduct] = useState("")
  const productId = useParams().id
  const [quantity, setquantity] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(()=>{
    requestProduct({id:productId})
    .then( response => response.json())
    .then( data => setProduct(data[0]))
  }, [productId])
  
  
  const {cart, modifyQuantity} = useContext(CartContext)
  function defineQuantity({number}){
    setquantity(number)
  }
  function addToCart(){
    modifyQuantity({id:productId, quantity:quantity})
  }

  function buyProduct(){
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000)
  }
  return {product, showConfetti, defineQuantity, addToCart, buyProduct}
}