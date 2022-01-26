import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component'


function Ratings(props) {
  const {data, handleStars} = props
  const [selected, setSelected] = useState('')
  const [Checked, setChecked] = useState([])

  //render
  function renderRatings(data) {
    let ratings = []
    let valueRatings= 1
    data.forEach(item => {
      if (ratings.indexOf(item.rating) === -1) {
        ratings.push(item.rating);
        valueRatings++
      }else {
        valueRatings++
      }
    })
    ratings.sort((a,b) => b-a)
 
    return ratings.map((item, index) => {
      return (
        <div className='rating-stars' key={index} onClick={() => handleClickStars(item)} >
          <ReactStars
            classNames={'starts-item'}
            count={6}
            value={item}
            size={14}
          />
          <p 
          className={selected === item ? 'active' : ''}
          >
            &amp; Up {valueRatings}
          </p>
        </div>
      )
    }) 
  }

  //
  function handleClickStars(item) {
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
    handleStars(newChecked)
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Ratings</h3>
      <div className='check-rating'>
        {data && renderRatings(data)}
      </div>
    </div>
  );
}

export default Ratings;