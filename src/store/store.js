import { configureStore } from '@reduxjs/toolkit'
import cake from '../modules/Catalog/store/slice'
import category from '../modules/CatalogNav/store/slice'
import filter from '../modules/DirectoryControlPanel/store/slice'
import cart from '../pages/Cart/store/slice'

export const store = configureStore({
  reducer: {
    cake,
    category,
    filter,
    cart,
  },
})
