import { SearchItemsHook } from '../Hooks/SearchItemsHook'
import '../Styles/InputSearch.css'
import loupe from '../assets/loupe.png'
import { NavLink } from 'react-router-dom'

export function InputSearch(){
  const  {search, open, results, handleInputChange, handleclick, handleBlur,searchAll} = SearchItemsHook()

  return(
    <>
      <div className="input-block">
        <form className="categories-form" onSubmit={searchAll}>
        <input 
          className="input-category" 
          type="text" 
          placeholder="Buscar productos marcas y más..."
          value={search}
          onChange={handleInputChange}
          onClick={handleclick}
          onBlur={handleBlur}
        >
        </input> 
        <button className="search-button" >
          <img src={loupe} className="loupe"></img>
        </button>
        </form>
        { (results && open) && (
        <div className='results-block'>
          {results.map((item) =>
          (
          <NavLink to = {`/products/${item.id}`}
           key={item.id}
           className='results-item'>
          {item.title}
          </NavLink>  
          )
          )}
        </div>
        )}
      </div>

    </>
  )
}