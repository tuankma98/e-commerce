import React, { useState } from "react"

function Category(props) {
  const {data, onClick, setIsClear} = props
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selected, setSelected] = useState('')
  const [selected1, setSelected1] = useState('')
  const [Checked, setChecked] = useState([])
  const [Checked1, setChecked1] = useState([])

  // render
  const renderCategory = (data) => {
    let category = []
    let categoryObj = {}

    data.forEach((element) => {
      category.push(element.categories)
    })
    
    category.forEach((element) => {
      if (!categoryObj[element[0]]) {
        if (element.length > 1) {
          categoryObj[element[0]] = {
            lv1: element[0],
            lv2: [element[1]],
          }
        } else {
          categoryObj[element[0]] = {
            lv1: element[0],
            lv2: [],
          }
        }
      } else {
        if (element.length > 1) {
          let lv2Arr = categoryObj[element[0]].lv2
          if (!lv2Arr.includes(element[1])) {
            categoryObj[element[0]] = {
              ...categoryObj[element[0]],
              lv2: [...lv2Arr, element[1]],
            }
          }
        }
      }
    })

    let categoryKeys = Object.keys(categoryObj)
    return categoryKeys.map((item, index) => {
      return (
        <li
          onClick={() => {
            handleCategory(item)
          }}
          key={index}
          className="category-item"
        > 
          <p>
            <span className="category-icon">&rsaquo;</span>
            <span
          className={selected === item ? 'active' : ''}
            > {item}</span>
          </p>
           
          {categoryObj[item].lv2 && (
            <ul
              className="category_sub-list"
              style={{ display: selectedCategory === item ? "block" : "none" }}
            >
              {categoryObj[item].lv2.map((subItem, subIndex) => {
                return (
                  <li className="category_sub-item" key={subIndex} 
                  >
                    <p>
                      <span className="category-icon">&rsaquo;</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCategory2({subItem, item})
                        }}
                        className={selected1 === subItem ? 'active1': ''}
                      >
                        {subItem}
                      </span>
                    </p>
                  </li>
                )
              })}
            </ul>
          )}
        </li>
      )
    })
  }


  // category lv1
  function handleCategory(item) {
    const currentIndex = Checked.indexOf(item)
    const newChecked = []

    if (currentIndex === -1) {
      newChecked.push(item)
      setSelected(item)
      setSelectedCategory(item)
    } else {
      newChecked.splice(currentIndex, 1)
      setSelectedCategory(newChecked)
      setSelected('')
      setSelected1('')
      setIsClear(false)
    }
  
    onClick(newChecked)
    setChecked(newChecked)
  }

  //category lv2
  function handleCategory2({subItem, item}) {
    const currentIndex1 = Checked1.indexOf(subItem)
    const newChecked1 = []
    if (currentIndex1 === -1) {
      newChecked1.push(subItem)
      setSelected1(subItem) 
    }else {
      newChecked1.splice(currentIndex1, 1)
      newChecked1.push(item)
      setSelected1('')
    }
    onClick(newChecked1)
    setChecked1(newChecked1)
  }

  return (
    <section className="facet-wrapper">
      <h3 className="facet-category-title">Show results for</h3>
      <ul className="category_list">{data && renderCategory(data)}</ul>
    </section>
  )
}

export default Category