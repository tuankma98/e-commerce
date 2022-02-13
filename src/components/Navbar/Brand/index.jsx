import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../reducers/filterSlice';
import { setCheckedBrand } from './brandSlice';


function Brand(props) {
  const { data } = props
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const checked_brand = useSelector(state => state.brand.checked_brand)

  //render
  function renderBrand(data) {
    let brands = []
    data.forEach(item => {
      if (brands.indexOf(item.brand) === -1) {
        brands.push(item.brand);
      }
    })
    brands.sort()
    
    return brands.map((item, index) =>{
      return (
        <div className="category-checkbox" key={index}>
          <input 
            type="checkbox" 
            id={`brand-${index}`}
            className = 'collection__checkbox' 
            value={item} 
            onChange={handleBrandCheck}
            />
          <label 
            htmlFor={`brand-${index}`}>{item}</label>
        </div>
      )
    }) 
  }

  function handleBrandCheck(e) {
    const { value } = e.target

    const currentIndexBrand = checked_brand.indexOf(value)
    let newChecked = [...checked_brand]

    if (currentIndexBrand === -1) {
      newChecked.push(value);
    }else {
      newChecked.splice(currentIndexBrand, 1)
      if(newChecked.length === 0) {
        newChecked = ''
      }
    }

    dispatch(setCheckedBrand(newChecked))
    dispatch(setFilter({
      ...filter,
      brand_like: newChecked
    }))
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Brand</h3>
      <form action="" className='form-checkbox'>
        {data && renderBrand(data)}
      </form>
    </div>
  );
}

export default Brand;