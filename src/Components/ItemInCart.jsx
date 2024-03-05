import { ItemCartHook } from '../Hooks/ItemCartHook'
import '../Styles/ItemInCart.css'

export function ItemInCart({id, quantity, priceFunction, modifyQuantity, deleteObject}){
  const {quantityItem, item, quantityModification, deleteItem} = ItemCartHook({id, quantity, priceFunction, modifyQuantity, deleteObject})



  return(
    <>
      { item &&  <section className="item-block">
        <div className="img-block-cart">
          <img src={item.image} className="product-in-cart-img"></img>
        </div>
        <div className="product-in-cart-text-block">
         <span className="product-in-cart-title">{item.title}</span>
         <span 
          onClick={deleteItem}
          className="product-in-cart-delete">
          Eliminar
        </span>
        </div>
        <div className="quantity-contator">
          <button 
           onClick={() => quantityModification({num:-1})}
           className="button-contator minus"> 
           - 
           </button>
          <span className="contator-text">{quantityItem}</span>
          <button 
           onClick={() => quantityModification({num:1})}
           className="button-contator plus"> 
            + 
          </button>
        </div>
        <span className="price-in-cart">${item.price}</span>
      </section>}
    </>
  )
}