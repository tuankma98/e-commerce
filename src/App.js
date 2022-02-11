import queryString from 'query-string'
import { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'
import { actions, useStore } from './store'

function App() {
  const [ state, dispatch ] = useStore()
  const { filter } = state

  // api
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filter)
        const requestUrl = `http://localhost:5000/PostList?${paramsString}`
        const res = await fetch(requestUrl)
        const resJSON = await res.json()
        dispatch(actions.setPostList(resJSON))
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }
    fetchPostList()
  },[filter])

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Main />
    </div>
  )
}

export default App
