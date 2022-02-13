import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: 'category',
  initialState: {
    checked: [],
    checked1: [],
    selected:'',
    selected1:' ',
    selected_category:''
  },
  reducers: {
    setChecked(state, action) {
      // mutation
      state.checked = action.payload
    },
    setChecked1(state, action) {
      state.checked1 = action.payload
    },
    setSelected(state, action) {
      state.selected = action.payload
    },
    setSelected1(state, action) {
      state.selected1 = action.payload
    },
    setSelectedCategory(state, action) {
      state.selected_category = action.payload
    }
  }
})

const { actions, reducer} = paginationSlice
export const { setChecked, setChecked1, setSelected, setSelected1, setSelectedCategory } = actions
export default reducer