import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../Redux/books/thunk/addBook";
import { loaded } from "../Redux/books/actions";

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({});

  const bookInfoHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setBookInfo((preValue) => ({ ...preValue, [name]: inputValue }));
  };
  
  const resetState = () => {
    setBookInfo({});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(bookInfo));
    dispatch(loaded);
    resetState()
  }



  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={submitHandler} className="book-form">
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              onChange={bookInfoHandler}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={bookInfoHandler}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              onChange={bookInfoHandler}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                onChange={bookInfoHandler}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                onChange={bookInfoHandler}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={bookInfoHandler}
            />
            <label for="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
