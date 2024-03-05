
const root_url = "https://freeshop-backend-production.up.railway.app"

export async function requestData({category, id, minPrice, maxPrice, sortColumn, sort = "DESC"}){
  let url = root_url + "/products/"
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
  return fetch( root_url+ '/products/categories' )
}

export async function requestProduct({id}){
  return fetch( root_url+ `/products/${id}` )

}

export async function searchProduct({search}){
  return fetch( root_url + `/products/search/${search}`)
}

