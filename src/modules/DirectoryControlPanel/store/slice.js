import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sort: { name: 'Новизне', value: 'option1' },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort(state, action) {
      state.sort = action.payload
    },
  },
})

export const { setSort } = filterSlice.actions

export default filterSlice.reducer
