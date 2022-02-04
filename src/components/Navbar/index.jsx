import React from 'react'
import { useState, useEffect } from 'react'
import Category from './Category'
import Type from './Type'
import Brand from './Brand'
import Ratings from './Ratings'
import Prices from './Prices'
import './navbar.scss'



function Navbar(props) {
  const {filter, setFilters} = props
  const [data, setData] = useState([])
  const [isClear, setIsClear] = useState(false)

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

  // clear all filter
  useEffect(() => {
    const filterValueArr = [
      filter.name_like, 
      filter.categories_like, 
      filter.price_range_like, 
      filter.type_like, 
      filter.brand_like, 
      filter.rating_like
    ]
    const flag = filterValueArr.some(value => {
      return value !== ''
    })
    setIsClear(flag)
  }, [filter])

    // Clear
    function handleClearFilter() {
      setFilters({
        ...filter,
        name_like: '',
        categories_like:'',
        price_range_like:'',
        type_like:'',
        brand_like:'',
        rating_like:'',
      })
      setIsClear(!isClear)
      console.log(isClear);
    }


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

  // handle category
  function handleCategory(categoryCheck) {
    setFilters({
      ...filter,
      categories_like: categoryCheck,
    })
  }

  return (
    <aside className="sidebar">
       {
          isClear && 
          <button onClick={handleClearFilter}>Clear All Filter</button>
      }
      <Category
        data={data}
        onClick ={handleCategory}
        setIsClear= {setIsClear}
      />
      <section className="facet-wrapper">
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
      </section>
    </aside>
  )
}

export default Navbar
