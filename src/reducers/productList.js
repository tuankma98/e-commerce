import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import queryString from 'query-string'

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productList: [],
    productPageList: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(productListPageAPI.pending, state => {
      state.isLoading = true
    })
    .addCase(productListPageAPI.fulfilled, (state, action) => {
      state.isLoading = false
      state.productPageList = action.payload
    })
    .addCase(productListPageAPI.rejected, state => {
      state.isLoading = false
    })
    .addCase(productListAllAPI.pending, state => {
      state.isLoading = true
    })
    .addCase(productListAllAPI.fulfilled, (state, action) => {
      state.isLoading = false
      state.productList = action.payload
    })
    .addCase(productListAllAPI.rejected, state => {
      state.isLoading = false
    })
  }
})

export const productListPageAPI = createAsyncThunk('productList/getPageAll', async (filter) => {
  try {
    const paramString = queryString.stringify(filter)
    const res = await axios.get(`${process.env.REACT_APP_API_URL}?${paramString}`)
    const data = res.data
    return data
  } catch (error) {
    console.log('Failed to fetch post list: ', error.message)
  }
})

export const productListAllAPI = createAsyncThunk('productList/getAll', async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL)
    const data = res.data
    return data
  } catch (error) {
    console.log('Failed to fetch post list: ', error.message)
  }
})

const { reducer } = productListSlice
export default reducer