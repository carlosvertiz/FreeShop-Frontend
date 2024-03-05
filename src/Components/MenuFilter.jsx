import { MenuFilterHook } from '../Hooks/MenuFilterHook'
import '../Styles/MenuFilter.css'

export function MenuFilter(){
  const {value, open, handleOptionClick, menuAction} = MenuFilterHook()
  
  return(
    <button className="menu-button" onClick={menuAction} onBlur={menuAction} >
      {value}
      {open &&
          <ul className='filer-list'>
            <li 
              onClick={handleOptionClick}
              className= {`list-options ${value =='Más relevantes'? 'list-selected-filter' : "no-active"}`}>
              <p  
                className= {`menu-options ${value =='Más relevantes'? 'selected-filter' : ""}`}>
                Más relevantes
              </p>
            </li>
            <li 
              onClick={handleOptionClick}
              className= {`list-options ${value =='Menor Precio'? 'list-selected-filter' : "no-active"}`}>
              <p 
                className={`menu-options ${value =='Menor Precio'? 'selected-filter' : ""}`}>
                Menor Precio
              </p>
            </li>
            <li 
              onClick={handleOptionClick}
              className= {`list-options ${value =='Mayor Precio'? 'list-selected-filter' : "no-active"}`}>
              <p 
                className={`menu-options ${value =='Mayor Precio'? 'selected-filter' : ""}`}>
                Mayor Precio
              </p>
            </li>
          </ul>
      }
      <svg className={`arrow-down ${open? 'arrow-up' : ""}`} aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="rgba(0, 0, 255, 1)"><path className='dropdwon-arrow' d="M9.35229 3.70447L6.00004 7.05672L2.64779 3.70447L1.85229 4.49996L6.00004 8.64771L10.1478 4.49996L9.35229 3.70447Z" fill="rgba(0, 0, 0, 0.9)"></path></svg>
    </button>
  )
}