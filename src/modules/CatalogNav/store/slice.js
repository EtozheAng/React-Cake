import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: null,
  categoryName: '',
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload.categoryId
      state.categoryName = action.payload.categoryName
    },
  },
})

export const { setCategoryId, setCategoryName } = categorySlice.actions

export default categorySlice.reducer
