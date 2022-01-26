import React from 'react'
import { useState, useEffect } from 'react'
import Categories from './Categories'
import Type from './Type'
import Brand from './Brand'
import Ratings from './Ratings'
import Prices from './Prices'
import './navbar.scss'



function Navbar(props) {
  const {filter, setFilters} = props
  const [data, setData] = useState([])

  //api
  useEffect(() => {
    async function fetchPostListCategory() {
      try {
        const requestUrl = 'http://localhost:5000/PostList'
        const res = await fetch(requestUrl)
        const resJSON = await res.json()
        setData(resJSON)
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message)
      }
    }
    fetchPostListCategory()
  }, [])

  // handle checkbox brand
  function handleBrand(brandChecked) {
    setFilters({
      ...filter,
      brand_like: brandChecked
    })
  }

  // handle checkbox type
  function handleTypes(typeChecked) {
    setFilters({
      ...filter,
      type_like: typeChecked
    })
  }

  //handle check stars
  function handleStars(starsCheck) {
    setFilters({
      ...filter,
      rating_like: starsCheck
    })
  }

  //handle check prices
  function handlePrices(pricesCheck) {
    setFilters({
      ...filter,
      price_range_like: pricesCheck
    })
  }

  return (
    <aside className="sidebar">
      <div className="clear-all">Clear all filters</div>
      <Categories
        data={data}
      />
      <div className="facet-wrapper">
        <h3 className='facet-category-title'>Refine by</h3>
        <Type 
          data={data}
          handleTypes={handleTypes}
        />
        <Brand
           data={data}
           handleBrand={handleBrand}
        />
        <Ratings
          data={data}
          handleStars={handleStars}
        />
        <Prices
          data={data}
          handlePrices={handlePrices}
        />
      </div>
    </aside>
  )
}

export default Navbar
