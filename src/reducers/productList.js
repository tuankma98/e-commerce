import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    productList: []
  },
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload
    }
  }
})

const { actions, reducer} = productListSlice
export const { setProductList } = actions
export default reducer