import '../Styles/ProductsPage.css'
import { ProductContainer } from './ProductContainer.jsx'
import { MenuFilter } from './MenuFilter.jsx'
import { InputPriceFilter } from './InputPriceFilter.jsx'
import { EmptyMessage } from './EmptyMessage.jsx'
import { ProductsPageHook } from '../Hooks/ProductsPageHook.jsx'
import { LoadingBlock } from './LoadingBlock.jsx'

export function ProductsPage(){
  const {products, filters, loading} = ProductsPageHook()
  
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
          { !loading?
            (
            <>
              <div className='content-sort'>
                <span className='sort-text'>Ordenado por</span>
                <MenuFilter></MenuFilter>
              </div>
              { (products.length == 0)?
              (
                <EmptyMessage></EmptyMessage>
              )
              :
              (
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
              )
              }
            </>
            )
           :
           (
            <LoadingBlock></LoadingBlock>
           )

          }
        </main>
      </section>  
    </>
  )
}

