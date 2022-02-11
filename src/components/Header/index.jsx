import React from 'react'
import Filter from './Filters'
import './header.scss'

Header.propTypes = {
}

function Header(props) {
  return (
    <header className="header">
      <a
        href="https://community.algolia.com/instantsearch.js/"
        className="is-logo"
      >
        <img
          src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
          alt="logo"
        />
      </a>
      <a href="/" className="logo">
        amazing
      </a>
      <Filter />
    </header>
  )
}

export default Header
