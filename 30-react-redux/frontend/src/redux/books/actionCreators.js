import * as actionTypes from "./actionTypes";

/**
 *
 * @param {object} newBook - object with new Book
 * @returns {{type: string, payload: object}}
 */
export const addBook = (newBook) => {
   return {
      type: actionTypes.ADD_BOOK,
      payload: newBook,
   };
};
