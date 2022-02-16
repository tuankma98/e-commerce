import React, { useEffect, useState } from 'react'
import Brand from './Brand'
import Category from './Category'
import ClearFilters from './ClearFilters'
import './navbar.scss'
import Prices from './Prices'
import Ratings from './Ratings'
import Type from './Type'
import productListAPI from '../../api/productListAPI'

function Navbar(props) {
  const [data, setData] = useState([])

  //api
  useEffect(() => {
    async function fetchPostListCategory() {
      try {
        const fetchProductAPI = await productListAPI.getAll()
        setData(fetchProductAPI)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }
    fetchPostListCategory()
  }, []) 

  return (
    <aside className="sidebar">
      <ClearFilters />
      <Category
        data={data}
      />
      <section className="facet-wrapper">
        <h3 className='facet-category-title'>Refine by</h3>
        <Type 
          data={data}
        />
        <Brand
           data={data}
        />
        <Ratings
          data={data}
        />
        <Prices
          data={data}
        />
      </section>
    </aside>
  )
}

export default Navbar
