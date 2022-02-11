import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component'
import { useStore, actions } from '../../../store'

function Ratings(props) {
  const {data} = props
  const [ state, dispatch ] = useStore()
  const { filter, selected_ratings } = state
  const [Checked, setChecked] = useState([])

  //render
  function renderRatings(data) {
    let ratings = []
    let obj = {}
    let star = {
      star1: [],
      star2: [],
      star3: [],
      star4: [],
      star5: [],
      star6: [],
    }

    data.forEach(item => {
      ratings.push(item.rating)
    })

    ratings.forEach(item => {
      if(item === 1) {
        star.star1.push(item)
        obj[item] = {
          star: star.star1.length
        }
      } else if (item === 2) {
        star.star2.push(item)
        obj[item] = {
          star: star.star2.length
        }
      } else if(item === 3) {
        star.star3.push(item)
        obj[item] = {
          star: star.star3.length
        }
      } else if(item === 4) {
        star.star4.push(item)
        obj[item] = {
          star: star.star4.length
        }
      } else if(item === 5) {
        star.star5.push(item)
        obj[item] = {
          star: star.star5.length
        }
      } else if(item === 6) {
        star.star6.push(item)
        obj[item] = {
          star: star.star6.length
        }
      }
    })

    let objKeys = Object.keys(obj)
    objKeys.sort((a,b) => b-a)
    
    return objKeys.map((item, index) => {
      return (
        <div className='rating-stars' key={index} onClick={() => handleClickStars(item)} >
          <ReactStars
            classNames={'starts-item'}
            count={6}
            value={parseInt(item)}
            size={14}
          />
          <p 
          className={selected_ratings === item ? 'active' : ''}
          >
            &amp; Up {obj[item].star}
          </p>
        </div>
      )
    }) 
  }

  //
  function handleClickStars(item) {
    const currentIndex = Checked.indexOf(item)
    let newChecked = []

    if (currentIndex === -1) {
      newChecked.push(item);
      dispatch(actions.setSelectedRatings(item))
    }else {
      newChecked.splice(currentIndex, 1)
      dispatch(actions.setSelectedRatings(''))
      newChecked = ''
    }

    setChecked(newChecked)

    dispatch(actions.setFilter({
      ...filter,
      rating_like: newChecked
    }))
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