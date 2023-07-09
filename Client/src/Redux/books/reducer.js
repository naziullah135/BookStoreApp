import { ADDBOOKS, DELETED, LOADED } from "./actionTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
    case ADDBOOKS:
      return [
        ...state,
       {...action.payload,}
      ];
      // case DELETED:
      //   return state.filter(book => book?.id !== action.payload)

    default:
      return state;
  }
};

export default booksReducer;
