import { ItemInCart } from "./ItemInCart"
import '../Styles/CartPage.css'
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { EmptyMessage } from "./EmptyMessage";
import Confetti from 'react-confetti';
import { CartHook } from "../Hooks/CartHook";

export function CartPage(){
  const {cart, modifyQuantity, deleteItem} = useContext(CartContext)
  const cantidad = cart.reduce((total, item) => total + item.quantity, 0);
  const {total, showConfetti, calculateTotal, buyProduct} = CartHook()

  return(
    <>
      {showConfetti && <Confetti recycle={false}/>}
      {(cart.length == 0) ?
        (
          <EmptyMessage></EmptyMessage>
        )
      :
        (<div className="content-block">
          <section className="cart-block">
            {cart.map(item => (
              <ItemInCart
                key={item.id}
                id = {item.id}
                modifyQuantity = {modifyQuantity}
                deleteObject = {deleteItem}
                quantity={item.quantity}
                priceFunction = {calculateTotal}>
              </ItemInCart>
            ))}
          </section> 
          <section className="resume-block">
              <span className="resume-text-title">Resumen de compra</span>
              <div className="resume_information">
                <span className="product-quantity">Productos ({cantidad})</span>
                <span className="product-total-price">${total.toFixed(2)}</span>
              </div>
            <button 
              onClick={buyProduct}
              className="button-cart-buy">
              Comprar
            </button>

          </section>
        </div>)
      }
    </>
  )
}