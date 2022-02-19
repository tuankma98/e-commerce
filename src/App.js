import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { productListPageAPI, productListAllAPI } from './reducers/productList'

function App() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)

  // api
  useEffect(() => {
    dispatch(productListAllAPI())
    dispatch(productListPageAPI(filter))
  }, [filter, dispatch])

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Main />
    </div>
  )
}
export default App