import React, { useState } from 'react';
import { useStore, actions } from '../../../store'

function Types(props) {
  const {data} = props
  const [ state, dispatch ] = useStore()
  const { filter } = state
  const [Checked, setChecked] = useState([])

  // render
  function renderTypes(data) {
    let types = []
    data.forEach(item => {
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
    const newChecked = [...Checked]

    if (currentIndex === -1) {
      newChecked.push(values);
    }else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)

    if (e.target.checked) {
      dispatch(actions.setFilter({
        ...filter,
        type_like: newChecked
      }))
    } else {
      dispatch(actions.setFilter({
        ...filter,
        type_like: newChecked
      }))
    }
  }

  return (
    <div className='facet'>
      <h3 className="facet-title">Type</h3>
      <form action="" className='form-checkbox'>
        {data && renderTypes(data)}
      </form>
    </div>
  );
}

export default Types;