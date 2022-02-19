import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../../reducers/filterSlice"
import { setSelected, setSelectedCategory, setSelected1, setChecked, setChecked1 } from "./categorySlice"

function Category(props) {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const productList = useSelector(state => state.productList.productList)
  const categoryState = useSelector(state => state.category)

  // render
  const renderCategory = (productList) => {
    let category = []
    let categoryObj = {}

    productList.forEach((element) => {
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
          className={categoryState.selected === item ? 'active' : ''}
            > {item}</span>
          </p>
           
          {categoryObj[item].lv2 && (
            <ul
              className="category_sub-list"
              style={{ display: categoryState.selected_category === item ? "block" : "none" }}
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
                        className={categoryState.selected1 === subItem ? 'active1': ''}
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
    const currentIndex = categoryState.checked.indexOf(item)
    let newChecked = []

    if (currentIndex === -1) {
      newChecked.push(item)
      dispatch(setSelected(item))
      dispatch(setSelectedCategory(item))
    } else {
      newChecked.splice(currentIndex, 1)
      dispatch(setSelectedCategory(newChecked))
      dispatch(setSelected(''))
      dispatch(setSelected1(''))
      newChecked =''
    }

    //
    dispatch(setFilter({
      ...filter,
      categories_like: newChecked,
    }))

    //
    dispatch(setChecked(newChecked))
  }

  //category lv2
  function handleCategory2({subItem, item}) {
    const currentIndex1 = categoryState.checked1.indexOf(subItem)
    const newChecked1 = []
    if (currentIndex1 === -1) {
      newChecked1.push(subItem)
      dispatch(setSelected1(subItem))
    }else {
      newChecked1.splice(currentIndex1, 1)
      newChecked1.push(item)
      dispatch(setSelected1(''))
    }
    
    //
    dispatch(setFilter({
      ...filter,
      categories_like: newChecked1,
    }))

    //
    dispatch(setChecked1(newChecked1))
  }

  return (
    <section className="facet-wrapper">
      <h3 className="facet-category-title">Show results for</h3>
      <ul className="category_list">{productList && renderCategory(productList)}</ul>
    </section>
  )
}

export default Category