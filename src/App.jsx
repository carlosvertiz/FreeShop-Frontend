import './App.css'
import { ProductsPage } from './Components/ProductsPage.jsx'
import {Header} from './Components/Header.jsx'
import { FooterPage } from './Components/FooterPage.jsx'
import { Route, Routes, Navigate } from "react-router-dom";
import { ProductContent } from './Components/ProductContent.jsx';
import { CartPage } from './Components/CartPage.jsx';


function App() {

  return (
    <>
      <Header></Header>
      <Routes>
          <Route path= "/" element = { <ProductsPage></ProductsPage> }> </Route>
          <Route path= "/products/:id" element = { <ProductContent></ProductContent> }> </Route>
          <Route path= "/cart" element = { <CartPage></CartPage> }> </Route>
          <Route path="/*" element = { <Navigate to = "/"></Navigate>}> </Route>
      </Routes>
      <FooterPage></FooterPage>
    </>
  )
}

export default App
