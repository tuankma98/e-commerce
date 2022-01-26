import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './filter.scss'

Filter.propTypes = {
  onSubmitFilter: PropTypes.func,
}

Filter.defaultProps = {
  onSubmitFilter: null,
}

function Filter(props) {
  const { onSubmitFilter } = props
  const [searchTerm, setSearchTerm] = useState('')
  const typingTimeoutRef = useRef(null)

  function handleSearchTermChange(e) {
    const value = e.target.value
    setSearchTerm(value)
    if (!onSubmitFilter) return

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      }
      onSubmitFilter(formValues)
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
