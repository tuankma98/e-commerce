import React, { useState } from 'react';


function Brand(props) {
  const {data, handleBrand} = props
  const [Checked, setChecked] = useState([])

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
            onChange={handleBrandCheck}/>
          <label htmlFor={`brand-${index}`}>{item}</label>
        </div>
      )
    }) 
  }

  function handleBrandCheck(e) {
    let values = e.target.value;
    const currentIndexBrand = Checked.indexOf(values)
    const newChecked = [...Checked]

    if (currentIndexBrand === -1) {
      newChecked.push(values);
    }else {
      newChecked.splice(currentIndexBrand, 1)
    }
    setChecked(newChecked)

    if (e.target.checked) {
      handleBrand(newChecked)
    } else {
      handleBrand(newChecked)
    }
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