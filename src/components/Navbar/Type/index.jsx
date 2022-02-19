import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from '../../../reducers/filterSlice';

function Types(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const productList = useSelector(state => state.productList.productList)
  const [Checked, setChecked] = useState([])

  // render
  function renderTypes(productList) {
    let types = []
    productList.forEach(item => {
      if (types.indexOf(item.type) === -1) {
        types.push(item.type);
      }
    })
    types.sort()
    
    return types.map((item, index) =>{
      return (
        <div className="category-checkbox" key={index}>
          <input 
            type="checkbox" 
            id={`type-${index}`}
            className ='collection__checkbox'
            value={item}
            onChange={handleTypeCheck}
          />
          <label htmlFor={`type-${index}`}>{item}</label>
        </div>
      )
    }) 
  }

  function handleTypeCheck(e) {
    let values = e.target.value;
    const currentIndex = Checked.indexOf(values)
    let newChecked = [...Checked]

    if (currentIndex === -1) {
      newChecked.push(values);
    }else {
      newChecked.splice(currentIndex, 1)
      if(newChecked.length === 0) {
        newChecked = ''
      }
    }
    setChecked(newChecked)

    if (e.target.checked) {
      dispatch(setFilter({
        ...filter,
        type_like: newChecked
      }))
    } else {
      dispatch(setFilter({
        ...filter,
        type_like: newChecked
      }))
    }
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Type</h3>
      <form action="" className='form-checkbox'>
        {productList && renderTypes(productList)}
      </form>
    </div>
  );
}

export default Types;