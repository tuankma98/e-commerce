import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductList } from './reducers/productList'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import productPageListAPI from './api/productPageListAPI'

function App() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)

  // api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchProductPageAPI = await productPageListAPI.getAll(filter)
        dispatch(setProductList(fetchProductPageAPI))
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }
    fetchProducts()
  }, [filter])

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Main />
    </div>
  )
}

export default App
