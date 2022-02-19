import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../../reducers/filterSlice"
import { setSelectedRatings } from './ratingsSlice'
import ReactStars from 'react-rating-stars-component'

function Ratings(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const productList = useSelector(state => state.productList.productList)
  const selected_ratings = useSelector(state => state.ratings.selected_ratings)
  const [Checked, setChecked] = useState([])

  //render
  function renderRatings(productList) {
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

    productList.forEach(item => {
      ratings.push(item.rating)
    })

    // quantity item star
    ratings.forEach(item => {
      switch(item) {
        case 1:
          star.star1.push(item)
          obj[item] = {
            star: star.star1.length
          }
          break
        case 2: 
          star.star2.push(item)
          obj[item] = {
            star: star.star2.length
          }
          break
        case 3:
          star.star3.push(item)
          obj[item] = {
            star: star.star3.length
          }
          break
        case 4:
          star.star4.push(item)
          obj[item] = {
            star: star.star4.length
          }
          break
        case 5:
          star.star5.push(item)
          obj[item] = {
            star: star.star5.length
          }
          break
        case 6:
          star.star6.push(item)
          obj[item] = {
            star: star.star6.length
          }
          break
        default:
          console.log('error');
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
      dispatch(setSelectedRatings(item))
    }else {
      newChecked.splice(currentIndex, 1)
      dispatch(setSelectedRatings(''))
      newChecked = ''
    }

    setChecked(newChecked)

    dispatch(setFilter({
      ...filter,
      rating_like: newChecked
    }))
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Ratings</h3>
      <div className='check-rating'>
        {productList && renderRatings(productList)}
      </div>
    </div>
  );
}

export default Ratings;