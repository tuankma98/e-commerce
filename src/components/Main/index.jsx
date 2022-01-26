import React from 'react'
import PropTypes from 'prop-types'
import './main.scss'
import PostList from './PostList'
import Pagination from './Pagination'
import Sort from './Sort'

Main.propTypes = {
  posts: PropTypes.array,
  pagination: PropTypes.object.isRequired,
  onPageChanges: PropTypes.func,
  onSortChanges: PropTypes.func,
}

Main.defaultProps = {
  posts: [],
  onPageChanges: null,
  onSortChanges: null,
}

function Main(props) {
  const { posts, pagination, onPageChanges, onSortChanges } = props
  return (
    <main className="main">
      <Sort onSortChanges={onSortChanges} />
      <PostList posts={posts} />
      <Pagination
        pagination={pagination} 
        onPageChanges={onPageChanges} 
      />
    </main>
  )
}

export default Main
