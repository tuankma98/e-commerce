import React, { useState } from 'react';

function Prices(props) {
  const {data, handlePrices} = props
  const [selected, setSelected] = useState('')
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
          className={selected === item ? 'active' : ''}
        >
          ${item}
        </li>
      )
    })
  }

  //
  function handleClickPrices(item) {
    const currentIndex = Checked.indexOf(item)
    const newChecked = []

    if (currentIndex === -1) {
      newChecked.push(item);
      setSelected(item)
    }else {
      newChecked.splice(currentIndex, 1)
      setSelected('')
    }

    setChecked(newChecked)
    handlePrices(newChecked)
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