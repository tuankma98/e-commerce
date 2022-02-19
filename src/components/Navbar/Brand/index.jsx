import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../reducers/filterSlice';

function Brand(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const productList = useSelector(state => state.productList.productList)
  const [checked_brand, setCheckedBrand] = useState([])

  //render
  function renderBrand(productList) {
    let brands = []
    productList.forEach(item => {
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
    
    setCheckedBrand(newChecked)
    dispatch(setFilter({
      ...filter,
      brand_like: newChecked
    }))
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Brand</h3>
      <form action="" className='form-checkbox'>
        {productList && renderBrand(productList)}
      </form>
    </div>
  );
}

export default Brand;