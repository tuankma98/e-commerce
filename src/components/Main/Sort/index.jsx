import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setFilter } from '../../../reducers/filterSlice'
import './sort.scss'

function Sort(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)

  function handleSortChange(e) {
    const value = e.target.value

    if (value === 'featured') {
      const action = setFilter({
        ...filter,
        _sort: '',
        _order: '',
      })
      dispatch(action)
    } else {
      const action = setFilter({
        ...filter,
        _sort: 'price',
        _order: value,
      })
      dispatch(action)
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
