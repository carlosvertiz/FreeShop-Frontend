import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {cleanup, render, screen, fireEvent} from '@testing-library/react'
import { Header } from '../src/Components/Header.jsx'

const categories = ["a", "b", "c"]


describe('Header', ()  => {

  beforeEach(() => {
    render(<Header
      categories={categories}
    ></Header>)
  })

  afterEach(()=>{
    vi.restoreAllMocks()
  })
  afterEach(cleanup)

  it('Should render', ()  => {
  })

  it('Should have category text', ()  => {
    screen.getByText('Categorías')
  })

  it('Should not have categories content visible', () => {
    categories.forEach(category => {
        expect(screen.queryByText(category)).toBeNull()
    })
  })

  it('Should  have input', () => {
    screen.getByRole('textbox')
  })


  it('Should show categories on hover', () => {
    const categoriesHeading = screen.getByText('Categorías')
    fireEvent.mouseOver(categoriesHeading);
    categories.forEach(category => {
      expect(screen.queryByText(category)).toBeDefined();
    });
  })

  it('Shoult have an image with alt as Carrito', () =>{
    screen.getByAltText('Carrito');
  })



})