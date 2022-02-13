import React from 'react'
import './pagination.scss'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../../reducers/filterSlice'

function Pagination(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const pagination = useSelector(state => state.pagination.pagination)

  const { _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)
  
  function handlePageChange({selected}) {
    let numbers = selected + 1

    const action = setFilter({
      ...filter,
      _page: numbers
    })
    dispatch(action)
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
