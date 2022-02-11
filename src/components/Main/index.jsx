import React from 'react'
import './main.scss'
import PostList from './PostList'
import Pagination from './Pagination'
import Sort from './Sort'


Main.propTypes = {}

function Main(props) {
  const { onSortChanges } = props
  return (
    <main className="main">
      <Sort onSortChanges={onSortChanges} />
      <PostList />
      <Pagination />
    </main>
  )
}

export default Main
