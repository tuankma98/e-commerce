import React, { useState } from 'react';
import { useStore, actions } from '../../../store'

function Prices(props) {
  const { data } = props
  const [ state, dispatch ] = useStore()
  const { filter, selected_prices } = state
  const [Checked, setChecked] = useState([])


  //render
  function renderPrices(data) {
    let prices = []
    data.forEach(item => {
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
      dispatch(actions.setSelectedPrices(item))
    }else {
      newChecked.splice(currentIndex, 1)
      dispatch(actions.setSelectedPrices(''))
      newChecked = ''
    }

    setChecked(newChecked)

    dispatch(actions.setFilter({
      ...filter,
      price_range_like: newChecked
    }))
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Prices</h3>
      <ul className='prices-list'>
        {data && renderPrices(data)}
      </ul>
    </div>
  );
}

export default Prices;