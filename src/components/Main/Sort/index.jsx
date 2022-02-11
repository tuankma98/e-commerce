import React from 'react'
import { actions, useStore } from '../../../store'
import './sort.scss'

function Sort(props) {
  const [ state, dispatch ] = useStore()
  const { filter } = state

  function handleSortChange(e) {
    const value = e.target.value

    if (value === 'featured') {
      dispatch(actions.setFilter({
        ...filter,
        _sort: '',
        _order: '',
      }))
    } else {
      dispatch(actions.setFilter({
        ...filter,
        _sort: 'price',
        _order: value,
      }))
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
