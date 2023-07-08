import { ADDBOOKS, LOADED } from "./actionTypes";


export const loaded = (books) => {
   return {
    type: LOADED,
    payload: books
   }
}
export const added = (books) => {
   return {
    type: ADDBOOKS,
    payload: books
   }
}