import { LOADED } from "./actionTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    default:
      return state;
  }
};

export default booksReducer;
