import '../Styles/ProductsPage.css'
import { ProductContainer } from './ProductContainer.jsx'
import { MenuFilter } from './MenuFilter.jsx'
import { InputPriceFilter } from './InputPriceFilter.jsx'
import { EmptyMessage } from './EmptyMessage.jsx'
import { ProductsPageHook } from '../Hooks/ProductsPageHook.jsx'
ProductsPageHook

export function ProductsPage(){
  const {products, filters} = ProductsPageHook()
  
  return (
    <>
      <section className='page-content'>
        <aside className='left-content'>
          <div className='resume-content'>
              <span className='resume-title'>{filters.category == ""? "Todo" : filters.category.toUpperCase()}</span>
              <span className='resume-results'>{products.length} resultados</span>
          </div>
          <InputPriceFilter></InputPriceFilter>
        </aside>    

        <main className='right-content'>
          { (products.length > 0)?
            (
            <>
              <div className='content-sort'>
                <span className='sort-text'>Ordenado por</span>
                <MenuFilter></MenuFilter>
              </div>

              <div className='products-block'>
                {products && products.map(product => (
                  <ProductContainer
                  key = {product.id}
                  id = {product.id}
                  product = {product.title} 
                  price = {product.price} 
                  image = {product.image} 
                  rate = {product.rating_rate}
                  count = {product.rating_count}
                  />
                ))}
              </div>
            </>
            )
           :
           (
             <EmptyMessage></EmptyMessage>
           )

          }
        </main>
      </section>  
    </>
  )
}

