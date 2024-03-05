import {afterEach, beforeEach, describe, it} from 'vitest'
import {cleanup, render, screen} from '@testing-library/react'
import { ProductContainer } from '../src/Components/ProductContainer'

const product = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
const price = 109.95

const imagen =  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

const rate= 3.9
const count= 120

const day = new Date();
day.setDate(day.getDate() + 3)
if (day.getDay() === 6) { 
  day.setDate(day.getDate() + 2)
} else if (day.getDay() === 0) { 
  day.setDate(day.getDate() + 1)
}
const options = { weekday: 'long' };
const nombreDia = day.toLocaleDateString('es-ES', options);



describe('ProductContainer', ()  => {
  beforeEach(() => {
    render(<ProductContainer
      imagen = {imagen}
      product = {product}
      price = {price}
      nombreDia = {nombreDia}
      rate = {rate}
      count = {count}
    />)
  })
  afterEach(cleanup)

  it('Should render', ()  => {
  })

  it("Should render title correctly", () => {
    screen.getByText(product)
  })

  it("Should render price correctly", () => {
    screen.getByText(`$${price}`)
  })

  it("Should render dues correctly", () => {
    screen.getByText(`en 6x $${price/6}`)
  })

  it("Should render recived day correctly", () => {
    screen.getByText(`Llega gratis el ${nombreDia}`)
  })

  it("Should render the imagen correctly", () => {
    screen.getByRole("img")
  })
  

  it("Should render rate correctly", () => {
    screen.queryByText(`/${rate}/i`)
  })

  it("Should render counts correctly", () => {
    screen.queryByText(`/${count}/i`)
  })





})