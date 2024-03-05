import { useState } from "react";


export function CartHook(){
  const [total, setTotal] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false);
  

  function calculateTotal(num){
    setTotal(prevTotal => prevTotal + num)
  }

  function buyProduct(){
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000)
  }
  return {total, showConfetti, calculateTotal, buyProduct}
}