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

/**
 *
 * @param {object} bookID - book that should be removed
 * @returns {{type: string, payload: object}}
 */
export const deleteBook = (bookID) => {
   return {
      type: actionTypes.DELETE_BOOK,
      payload: bookID,
   };
};

/**
 *
 * @param {number} bookID - book's id to be marked as favorite
 * @returns {{type: string, payload: number}}
 */
export const toggleFavorite = (bookID) => {
   return {
      type: actionTypes.TOGGLE_FAVORITE,
      payload: bookID,
   };
};
