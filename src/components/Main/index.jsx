import React from 'react'
import './main.scss'
import PostList from './PostList'
import Pagination from './Pagination'
import Sort from './Sort'


Main.propTypes = {}

function Main(props) {
  return (
    <main className="main">
      <Sort />
      <PostList />
      <Pagination />
    </main>
  )
}

export default Main
