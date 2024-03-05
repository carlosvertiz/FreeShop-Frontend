import { MenuQuantityHook } from '../Hooks/MenuQuantityHook'
import '../Styles/MenuAddQuantity.css'

export function MenuAddQuantity({quantityModifier}){
  const {value, open, handleOptionClick, menuAction} = MenuQuantityHook({quantityModifier})
  
  return(
    <button className="menu-quantity" onClick={menuAction} >
      <span className='quantity'> Cantidad:</span>
       {value}
      {open &&
          <ul className='quantity-list'>
            {[1,2,3,4,5,6].map(number =>
              ( 
              <li 
                key = {number}
                value={number}
                onClick={() => handleOptionClick(number)}
                className= {`quantity-option ${value == `${number} ${number === 1 ? 'unidad' : 'unidades'}`? "quantity-active" : "quantity-no-active"}`}>
                <p  
                  value={number}
                  className= 'quantity-text'> 
                  {`${number} ${number === 1 ? 'unidad' : 'unidades'}`}
                </p>
              </li>)
              )
            }

          </ul>
      }
      <svg className={`arrow-down ${open? 'arrow-up' : ""}`} aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="rgba(0, 0, 255, 1)"><path className='dropdwon-arrow' d="M9.35229 3.70447L6.00004 7.05672L2.64779 3.70447L1.85229 4.49996L6.00004 8.64771L10.1478 4.49996L9.35229 3.70447Z" fill="rgba(0, 0, 0, 0.9)"></path></svg>
    </button>
  )
}