import {afterEach, beforeEach, describe, it} from 'vitest'
import {cleanup, render, screen} from '@testing-library/react'
import { ProductsPage } from '../src/Components/ProductsPage.jsx'



describe('ProductsPage', ()  => {
  beforeEach(() => {
    render(<ProductsPage/>)
  })
  afterEach(cleanup)

  it('Should render', ()  => {
  })

})