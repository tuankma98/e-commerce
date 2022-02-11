import React from 'react';
import { useStore, actions } from '../../../store'


function Brand(props) {
  const { data } = props
  const [ state, dispatch ] = useStore()
  const { filter, checked_brand } = state

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
    const newChecked = [...checked_brand]

    if (currentIndexBrand === -1) {
      newChecked.push(value);
    }else {
      newChecked.splice(currentIndexBrand, 1)
    }

    dispatch(actions.setCheckedBrand(newChecked))
    dispatch(actions.setFilter({
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