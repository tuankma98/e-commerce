import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState: {
    selected_ratings: ''
  },
  reducers: {
    setSelectedRatings(state, action) {
      state.selected_ratings = action.payload
    }
  }
})

const { actions, reducer} = ratingsSlice
export const { setSelectedRatings } = actions
export default reducer