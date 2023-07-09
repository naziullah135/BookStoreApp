import { added, loaded } from "../actions";

const addBook = (data) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: { "Content-Type": "application/json; charset= UTF-8" },
    });

    dispatch(added(data));
  };
};

export default addBook;
