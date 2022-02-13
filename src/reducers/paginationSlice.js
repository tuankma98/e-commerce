import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pagination: {
      _page: 1,
      _limit: 16,
      _totalRows: 10000,
    }
  },
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload
    }
  }
})

const { actions, reducer} = paginationSlice
export const { setPagination } = actions
export default reducer