import { useContext, useEffect, useState } from "react"
import { requestProduct } from "../Request/serverRequest"
import { useParams } from 'react-router-dom'
import { CartContext } from "../../context/cart.jsx"

export function ProductContentHook(){
  const [product, setProduct] = useState("")
  const productId = useParams().id
  const [quantity, setquantity] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    requestProduct({id:productId})
    .then( response => response.json())
    .then( data => {
      setProduct(data[0])
      setLoading(false)
      })
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
  return {product, loading, showConfetti, defineQuantity, addToCart, buyProduct}
}