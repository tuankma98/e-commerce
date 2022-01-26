import React from 'react'
import './pagination.scss'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChanges: PropTypes.func,
}

Pagination.defaultProps = {
  onPageChanges: null,
}

function Pagination(props) {
  const { pagination, onPageChanges} = props
  const { _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)
  
  function handlePageChange({selected}) {
    let numbers = selected + 1
    if (onPageChanges) {
      onPageChanges(numbers)
    }

  }

  return (
    <section className="pagination-wraper">
      <ReactPaginate
        previousLabel={'< Previous page'}
        nextLabel={'Next page >'}
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={7}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </section>
  )
}

export default Pagination
