import { PriceFilterHook } from "../Hooks/PriceFilterHook"
import "../Styles/InputPriceFilter.css"

export function InputPriceFilter(){
  const {buttonState, error, filterPrice, handleInputChange} = PriceFilterHook()

  return(
    <form className='filter-price' onSubmit={filterPrice} onChange={handleInputChange}>
      <span className='price-text'>Precio</span>
      <div className='filter-input-block'>
        <div className='minimum-container'>
          <input 
            autoComplete="off"
            className='minimum-price'
            placeholder='Minimo'
            name = "minimo"
            ></input>
        </div>
        <div className='maximum-container'>
        <input 
          autoComplete="off"
          className='maximum-price'
          placeholder='Maximo'
          name = "maximo"
          ></input>
        </div>

        <button 
          className={`apply-filter-button ${buttonState? "disabled":"active"}`}
          disabled={buttonState}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.9)"><path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="rgba(0, 0, 0, 0.9)"></path></svg>
        </button>
      </div>
      {error && <div className="input-error">Debe ser un valor numerico</div>}

    </form>
  )
}