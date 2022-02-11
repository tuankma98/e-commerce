import {SET_POST_LIST, SET_PAGINATION, SET_FILTER, SET_CHECKED, SET_CHECKED1, SET_SELECTED, SET_SELECTED1, SET_SELECTEDCATEGORY, SET_SELECTEDRATINGS, SET_SELECTEDPRICES, SET_CHECKEDBRAND } from './constants'

const initState = {
    postList: [],
    checked: [],
    checked1: [],
    checked_brand: [],
    selected_category: '',
    selected_ratings: '',
    selected_prices: '',
    selected: '',
    selected1: '',
    pagination: {
        _page: 1,
        _limit: 16,
        _totalRows: 10000,
    },
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
}

function reducer(state, action) {
    switch (action.type) {
        case SET_POST_LIST :
          return {
              ...state,
              postList: action.payload
          }
        case SET_PAGINATION :
            return {
                ...state,
                pagination: action.payload
            }
        case SET_FILTER :
          return {
              ...state,
              filter: action.payload
          }
        case SET_CHECKED :
            return {
                ...state,
                checked: action.payload
            }
        case SET_CHECKED1:
            return {
                ...state,
                checked1: action.payload
            }
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        case SET_SELECTED1:
            return {
                ...state,
                selected1: action.payload
            }
        case SET_SELECTEDCATEGORY:
            return {
                ...state,
                selected_category: action.payload
            }
        case SET_SELECTEDRATINGS:
            return {
                ...state,
                selected_ratings: action.payload
            }
        case SET_SELECTEDPRICES:
            return {
                ...state,
                selected_prices: action.payload
            }
        case SET_CHECKEDBRAND:
            return {
                ...state,
                checked_brand: action.payload
            }
        default:
            throw new Error("invalid action")
    }
}
export {initState}
export default reducer