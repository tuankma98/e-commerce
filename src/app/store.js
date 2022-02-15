import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../reducers/filterSlice'
import productListReducer from '../reducers/productList'
import paginationReducer from '../reducers/paginationSlice'
import categoryReducer from '../components/Navbar/Category/categorySlice'
import ratingsReducer from '../components/Navbar/Ratings/ratingsSlice'
import pricesReducer from '../components/Navbar/Prices/pricesSlice'

const rootReducer = {
  filter: filterReducer,
  productList: productListReducer,
  pagination: paginationReducer,
  category: categoryReducer,
  ratings: ratingsReducer,
  prices: pricesReducer
}

const store = configureStore({
  reducer: rootReducer
})

export default store