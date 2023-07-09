import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filteredBooks from "../Redux/books/thunk/filterBooks";

const Filter = () => {
  const dispatch = useDispatch();
  const bookInfo  = useSelector((state) => state.books)

  const handleFilter = (filterType) => {
    dispatch(filteredBooks(filterType))
  }


  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button onClick={ () => handleFilter("all")} className="filter-btn active-filter" id="lws-filterAll">
          All
        </button>
        <button onClick={ () => handleFilter("featured")} className="filter-btn" id="lws-filterFeatured">
          Featured
        </button>
      </div>
    </div>
  );
};

export default Filter;
