import { useState, useEffect } from 'react'
import queryString from 'query-string'
import './App.scss'
import './assets/styles/reset.scss'
import './assets/styles/global.scss'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _limit: 16,
    _page: 1,
    _totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _limit: 16,
    _page: 1,
    name_like: '',
    categories_like: '',
    price_range_like: '',
    type_like: '',
    brand_like: '',
    rating_like: '',
  })

  // api
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters)
        const requestUrl = `http://localhost:5000/PostList?${paramsString}`
        const res = await fetch(requestUrl)
        const resJSON = await res.json()
        setPostList(resJSON)
        setPagination({
          _limit: 16,
          _page: filters._page,
          _totalRows: 10000,
        })
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }
    fetchPostList()
  }, [filters])

  // render when filter search
  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      name_like: newFilters.searchTerm,
    })
  }

  // render UI when sort optionValue
  function handleSortChange(sort) {
    if (sort === 'featured') {
      setFilters({
        ...filters,
        _sort: '',
        _order: '',
      })
    } else {
      setFilters({
        ...filters,
        _sort: 'price',
        _order: sort,
      })
    }
  }

  // render page
  function handlePageChange(numbers) {
    setFilters({
      ...filters,
      _page: numbers,
    })
  }

  return (
    <div className="app">
      <Header onSubmit={handleFiltersChange} />
      <Navbar 
        filter={filters}
        setFilters={setFilters}
      />
      <Main
        onSortChanges={handleSortChange}
        posts={postList}
        onPageChanges={handlePageChange}
        pagination={pagination}
      />
    </div>
  )
}

export default App
