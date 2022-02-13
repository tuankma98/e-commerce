import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    checked_brand: []
  },
  reducers: {
    setCheckedBrand(state, action) {
      state.checked_brand = action.payload
    }
  }
})

const { actions, reducer} = brandSlice
export const { setCheckedBrand } = actions
export default reducer