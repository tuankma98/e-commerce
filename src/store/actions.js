import {SET_POST_LIST, SET_PAGINATION, SET_FILTER, SET_CHECKED, SET_CHECKED1, SET_SELECTED, SET_SELECTED1, SET_SELECTEDCATEGORY, SET_SELECTEDRATINGS, SET_SELECTEDPRICES, SET_CHECKEDBRAND } from './constants'

export const setPostList = payload => ({
  type: SET_POST_LIST,
  payload
})

export const setPagination = payload => (
  {
    type: SET_PAGINATION,
    payload
  }
)

export const setFilter = payload => ({
  type: SET_FILTER,
  payload
})

export const setChecked = payload => ({
  type: SET_CHECKED,
  payload
})

export const setChecked1 = payload => ({
  type: SET_CHECKED1,
  payload
})

export const setSelected = payload => ({
  type: SET_SELECTED,
  payload
})

export const setSelected1 = payload => ({
  type: SET_SELECTED1,
  payload
})

export const setSelectedCategory = payload => ({
  type: SET_SELECTEDCATEGORY,
  payload
})

export const setSelectedRatings = payload => ({
  type: SET_SELECTEDRATINGS,
  payload
})

export const setSelectedPrices = payload => ({
  type: SET_SELECTEDPRICES,
  payload
})

export const setCheckedBrand = payload => ({
  type: SET_CHECKEDBRAND,
  payload
})