import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../reducers/filterSlice";
import { setSelected, setSelected1, setSelectedCategory } from "../Category/categorySlice";
import { setSelectedPrices } from "../Prices/pricesSlice";
import { setSelectedRatings } from "../Ratings/ratingsSlice";

function ClearFilters() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)
  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    const filterArr = [
      filter._sort,
      filter._order,
      filter.name_like,
      filter.categories_like,
      filter.price_range_like,
      filter.rating_like,
      filter.brand_like,
      filter.type_like,
    ];
    const flag = filterArr.some((value) => {
      return value !== ""
    });
    setIsClear(flag);
  }, [filter])

  //
  function handleClearFilter() {
    dispatch(
      setFilter({
        ...filter,
        _sort: "",
        _order: "",
        name_like: "",
        categories_like: "",
        price_range_like: "",
        rating_like: "",
        brand_like: "",
        type_like: "",
      })
    )
    dispatch(setSelected(''))
    dispatch(setSelected1(''))
    dispatch(setSelectedCategory(''))
    dispatch(setSelectedRatings(''))
    dispatch(setSelectedPrices(''))

    let checkboxList = document.querySelectorAll('.collection__checkbox')
    checkboxList.forEach(item => item.checked = false)
  }

  return (
    <section>
      {isClear && <button onClick={handleClearFilter}>Clear Filter</button>}
    </section>
  );
}

export default ClearFilters;