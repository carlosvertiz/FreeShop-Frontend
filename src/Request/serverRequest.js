export async function requestData({category, id, minPrice, maxPrice, sortColumn, sort = "DESC"}){
  let url = "http://localhost:1234/products/"
  if (id){
    url += `${id}`
  }
  else if (category){
    url += `category?category=${category}&sortColumn=${sortColumn}&sort=${sort}&minPrice=${minPrice}&maxPrice=${maxPrice}`

  } else{
    url += `?sortColumn=${sortColumn}&sort=${sort}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  }
  return fetch(url)
}

export async function requestCategories(){
  return fetch('http://localhost:1234/products/categories')
}

export async function requestProduct({id}){
  return fetch(`http://localhost:1234/products/${id}`)

}

export async function searchProduct({search}){
  return fetch(`http://localhost:1234/products/search/${search}`)
}

