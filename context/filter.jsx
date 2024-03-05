import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({children}) {
  const [filters, setFilters] = useState({
    category: "",
    sortColumn: "rating_rate",
    sort: "DESC",
    minPrice: 0,
    maxPrice: ""
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }} >
      {children}
    </FiltersContext.Provider>
  )
}