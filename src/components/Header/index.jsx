import React from 'react'
import './header.scss'
import PropTypes from 'prop-types'
import Filter from './Filters'

Header.propTypes = {
  onSubmit: PropTypes.func,
}

Header.defaultProps = {
  onSubmit: null,
}

function Header(props) {
  const { onSubmit } = props
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
      <Filter onSubmitFilter={onSubmit} />
    </header>
  )
}

export default Header
