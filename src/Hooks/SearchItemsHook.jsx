import { searchProduct } from '../Request/serverRequest'
import { FiltersContext } from '../../context/filter'
import { useContext, useEffect, useState } from 'react'


export function SearchItemsHook(){
  const [search, setSearch] = useState('')
  const [results, setResults] = useState('')
  const [open, setOpen] = useState(false)
  const {filters, setFilters} = useContext(FiltersContext)

  useEffect(()=>{
    searchProduct({search})
    .then(response => response.json())
    .then(data =>{
      setResults(data)})
  },[search])

  function handleInputChange(event){
    if (!open) {
      setOpen(true)
    }
    setSearch(event.target.value)
  }
  
  function handleclick(){
    setOpen(true)
  }
  function handleBlur(){
    setTimeout(() =>{
      setOpen(false)
    },200)
  }


  function searchAll(event){
    event.preventDefault()
    setFilters({...filters, id:`${results.map(item => item.id).join('-')}`})
  }

  return {search, open, results, handleInputChange, handleclick, handleBlur, searchAll}
}