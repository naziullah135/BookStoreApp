import { ADDBOOKS, LOADED ,DELETED} from "./actionTypes";


export const loaded = (books) => {
   return {
    type: LOADED,
    payload: books
   }
}
export const added = (bookInfo) => {
   return {
    type: ADDBOOKS,
    payload: bookInfo
   }
}

// export const bookDelete = (bookId) => {
//    return {
//        type: DELETED,
//        payload: bookId
//    }
// }