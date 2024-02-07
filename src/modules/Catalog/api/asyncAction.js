import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCakes = createAsyncThunk('cake/fetchCake', async (params) => {
  const { currentPage, categoryId, sortBy, order } = params
  const { data } = await axios.get(
    `https://64843ff7ee799e3216266cf1.mockapi.io/cake?page=${currentPage}&limit=16&category=${categoryId}&sortBy=${sortBy}&order=${order}`
  )
  return data
})
