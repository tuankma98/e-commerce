import React, { useEffect, useState } from "react";
import { useStore, actions } from "../../../store";

function ClearFilters() {
  const [state, dispatch] = useStore();
  const { filter } = state;
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
      actions.setFilter({
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
    dispatch(actions.setSelected(''))
    dispatch(actions.setSelected1(''))
    dispatch(actions.setSelectedCategory(''))
    dispatch(actions.setSelectedRatings(''))
    dispatch(actions.setSelectedPrices(''))
  }

  return (
    <section>
      {isClear && <button onClick={handleClearFilter}>Clear Filter</button>}
    </section>
  );
}

export default ClearFilters;