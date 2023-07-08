import { loaded } from "../books/actions";

const filteredBooks = (filterType) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();

    if (filterType === "featured") {
       const filteredBooks = books.filter((book) => book.featured)
       dispatch(loaded(filteredBooks))
    }else {
        dispatch(loaded(books));
    }
  };
};

export default filteredBooks;
