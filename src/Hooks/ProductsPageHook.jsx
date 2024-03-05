import { useState,useEffect, useContext } from 'react'
import { requestData } from '../Request/serverRequest.js'
import { FiltersContext } from '../../context/filter.jsx'

export function ProductsPageHook(){
  const {filters} = useContext(FiltersContext)
  const [products, setProducts] = useState("")

  useEffect(()=>{
    requestData({category: filters.category, 
                 minPrice: filters.minPrice, 
                 maxPrice: filters.maxPrice, 
                 id: filters.id, 
                 sortColumn: filters.sortColumn, 
                 sort: filters.sort})
    .then(response => response.json())
    .then(data =>{
      setProducts(data)
    } 
      )
    .catch( error => {
      console.error('An error occurred:', error)
    })
  },[filters])
  return {products, filters}
}