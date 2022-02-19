import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../reducers/filterSlice'
import './filter.scss'

function Filter(props) {
  const dispatch1 = useDispatch()
  const filter1 = useSelector(state => state.filter.filter)
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  function handleSearchTermChange(e) {
    const value = e.target.value
    setSearchTerm(value)

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      }

      const action = setFilter({
        ...filter1,
        name_like: formValues.searchTerm
      })
      dispatch1(action)

      // dispatch(actions.setFilter({
      //   ...filter,
      //   name_like: formValues.searchTerm,
      // }))
    }, 500)
  }

  return (
    <form className="input-group">
      <input
        type="text"
        placeholder="Search a product"
        className="form-search"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button type="submit" className="btn" onClick={(e) => e.preventDefault()}>
        <i className="bx bx-search"></i>
      </button>
    </form>
  )
}

export default Filter
