import { NavLink } from "react-router-dom";
import "../Styles/ProductContainer.css"
import {StarScore} from './StarScore.jsx'

export function ProductContainer({id, product, price, image, rate, count}){

  const day = new Date();
  day.setDate(day.getDate() + 1); 
  if (day.getDay() === 6) { 
    day.setDate(day.getDate() + 2); 
  } else if (day.getDay() === 0) { 
    day.setDate(day.getDate() + 1); 
  }
  const options = { weekday: 'long' };
  const nombreDia = day.toLocaleDateString('es-ES', options);

    return (
      <NavLink to = {`/products/${id}`} className="container-block">
        <div className="imagen-block">
          <img 
            className="imagen-product"
            src = {image}
            alt = "Product imagen">
          </img>
        </div>
         <aside className="product-information">
          <div className="product-name-block">
            <span className="product-name">
              {product}
            </span>
          </div>
          <span className="product-price">
            ${price}
          </span>
          <span className="product-dues">
            en 6 cuotas de ${(price/6).toFixed(2)}
          </span>
          <span className="product-reception">
            Llega gratis el {nombreDia}
          </span>
          <span className="product-rate">
            {rate}
            <StarScore score = {rate}></StarScore>
            ({count})
          </span>
        </aside>
        
      </NavLink>
  )
}