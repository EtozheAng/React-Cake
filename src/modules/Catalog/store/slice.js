import { createSlice } from '@reduxjs/toolkit'
import { fetchCakes } from '../api/asyncAction'

const initialState = {
  items: [],
  currentPage: 1,
  status: 'loading',
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCakes.pending, (state) => {
        state.items = []
        state.status = 'loading'
      })
      .addCase(fetchCakes.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchCakes.rejected, (state, action) => {
        state.items = []
        state.status = 'error'
      })
  },
})

export const { setCurrentPage } = cakeSlice.actions

export default cakeSlice.reducer
