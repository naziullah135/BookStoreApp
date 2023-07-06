import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchBooks from '../Redux/thunk/fetchBooks';
import Books from './Books';

const BookContainer = () => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state?.books);
  
    useEffect(() => {
      dispatch(fetchBooks);
    }, [dispatch]);
    return (
        <div className="lws-bookContainer">
            {books.map((book) => (
              <Books key={book.id} book={book} />
            ))}
          </div>
    );
};

export default BookContainer;