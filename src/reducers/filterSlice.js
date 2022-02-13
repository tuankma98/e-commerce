import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: {
      _page: 1,
      _limit: 16,
      _sort: '',
      _order: '',
      name_like: '',
      categories_like: '',
      price_range_like: '',
      rating_like: '',
      brand_like: '',
      type_like: '',
    }
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload
    }
  }
})

const { actions, reducer} = filterSlice
export const { setFilter } = actions
export default reducer