import React from 'react'
import './sort.scss'
import PropTypes from 'prop-types'

Sort.propTypes = {
  onSortChanges: PropTypes.func,
}

Sort.defaultProps = {
  onSortChanges: null,
}

function Sort(props) {
  const { onSortChanges } = props

  function handleSortChange(e) {
    const value = e.target.value
    if (onSortChanges) {
      onSortChanges(value)
    }
  }
  return (
    <section className="sort">
      <div className="sort-by">
        <label>Sort by</label>
        <select name="sort-select" id="sort-select" onChange={handleSortChange}>
          <option value="featured">Featured</option>
          <option value="asc">Price asc.</option>
          <option value="desc">Price desc.</option>
        </select>
      </div>
    </section>
  )
}

export default Sort
