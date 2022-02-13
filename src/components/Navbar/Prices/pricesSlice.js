import { createSlice } from "@reduxjs/toolkit";

const pricesSlice = createSlice({
  name: 'prices',
  initialState: {
    selected_prices: ''
  },
  reducers: {
    setSelectedPrices(state, action) {
      state.selected_prices = action.payload
    }
  }
})

const { actions, reducer} = pricesSlice
export const { setSelectedPrices } = actions
export default reducer