
import {StarScore} from './StarScore.jsx'
import '../Styles/ProductContent.css'
import { MenuAddQuantity } from "./MenuAddQuantity.jsx"
import Confetti from 'react-confetti'
import { ProductContentHook } from '../Hooks/ProductContentHook.jsx'
ProductContentHook
export function ProductContent(){
  const  {product, showConfetti, defineQuantity, addToCart, buyProduct} = ProductContentHook()

  return(
    <div className="product-info-block">
      {product &&
        <>
          <div className="product-image-block">
            <img className = "product-page-image"src={product.image}></img> 
          </div>

          <div className="product-page-information">
            <span className="product-page-title">{product.title}</span>
            <div className="rating-product">
              <span className="rating-text">{product.rating_rate}</span>
              <StarScore score = {product.rating_rate}></StarScore>
              <span className="rating-text">({product.rating_count})</span>
            </div>
            <span className="product-page-price">${product.price}</span>
          </div>
          
          <div className="add-items-cart">
            <section className="item-quantity">
              <a className="stock-text">Stock disponible</a>
              <MenuAddQuantity
              quantityModifier = {defineQuantity}></MenuAddQuantity>
            </section>
            <section className="button-add-block">
              <button 
                onClick={buyProduct}
                className="button-poduct buy-now">
                Comprar Ahora</button>
                {showConfetti && <Confetti recycle={false}/>}
              <button 
                className="button-poduct add-cart"
                onClick={addToCart}>Agregar al carrito</button>
            </section>
          </div>

          <section className="product-description">
            <h3 className="drescription-product">Descripción</h3>
            {product.description_text}
          </section>
        </>
      }
    </div>
  )
}