import { loaded } from "../books/actions";

const addBook = (data) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: { "Content-Type": "application/json; charset= UTF-8" },
    });

    dispatch(loaded);
  };
};

export default addBook;