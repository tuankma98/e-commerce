import React from 'react'
import Brand from './Brand'
import Category from './Category'
import ClearFilters from './ClearFilters'
import './navbar.scss'
import Prices from './Prices'
import Ratings from './Ratings'
import Type from './Type'

function Navbar(props) {

  return (
    <aside className="sidebar">
      <ClearFilters />
      <Category />
      <section className="facet-wrapper">
        <h3 className='facet-category-title'>Refine by</h3>
        <Type />
        <Brand />
        <Ratings />
        <Prices />
      </section>
    </aside>
  )
}

export default Navbar
