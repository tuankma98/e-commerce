import React from 'react';
import PropTypes from 'prop-types';
import Categories2 from '../categories-2'

Categories.propTypes = {
  
};

function Categories(props) {

  return (
    <div className='facet-wrapper'>
      <h3 className='facet-category-title'>Show results for</h3>
      <ul className="categories-1">
        <li className="categories-item-1">
          <p>&rsaquo; Appliances</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Audio</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Cameras &amp; Camcorders</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Car Electronics &amp; GPS</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Cell Phones</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Computers &amp; Tablets</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Health, Fitness &amp; Beauty</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Office &amp; School Supplies</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; TV &amp; Home Theater</p>
          <Categories2/>
        </li>
        <li className="categories-item-1">
          <p>&rsaquo; Video Game</p>
          <Categories2/>
        </li>
      </ul>
    </div>
  );
}

export default Categories;