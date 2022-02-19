import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from '../../../reducers/filterSlice';
import { setSelectedPrices } from './pricesSlice';

function Prices(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const productList = useSelector(state => state.productList.productList)
  const selected_prices = useSelector(state => state.prices.selected_prices)
  const [Checked, setChecked] = useState([])


  //render
  function renderPrices(productList) {
    let prices = []
    productList.forEach(item => {
      if(prices.indexOf(item.price_range) === -1) {
        prices.push(item.price_range)
      }
    })   
    prices.sort()

    return prices.map((item, index) => {
      return (
        <li 
          key={index}
          onClick={() => handleClickPrices(item)}
          className={selected_prices === item ? 'active' : ''}
        >
          ${item}
        </li>
      )
    })
  }

  //
  function handleClickPrices(item) {
    const currentIndex = Checked.indexOf(item)
    let newChecked = []

    if (currentIndex === -1) {
      newChecked.push(item);
      dispatch(setSelectedPrices(item))
    }else {
      newChecked.splice(currentIndex, 1)
      dispatch(setSelectedPrices(''))
      newChecked = ''
    }

    setChecked(newChecked)

    dispatch(setFilter({
      ...filter,
      price_range_like: newChecked
    }))
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Prices</h3>
      <ul className='prices-list'>
        {productList && renderPrices(productList)}
      </ul>
    </div>
  );
}

export default Prices;