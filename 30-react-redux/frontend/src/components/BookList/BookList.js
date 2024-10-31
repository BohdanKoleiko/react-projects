import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
   const books = useSelector((state) => state.books);
   const titleFilter = useSelector(selectTitleFilter);
   const dispatch = useDispatch();

   const handleDeleteBook = (bookID) => {
      dispatch(deleteBook(bookID));
   };

   const handleFavoriteBook = (bookID) => {
      dispatch(toggleFavorite(bookID));
   };

   const filteredeBooks = books.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
      return matchesTitle;
   });

   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p>No books available</p>
         ) : (
            <ul>
               {filteredeBooks.map((book, i) => (
                  <li className="" key={book.id}>
                     <div className="book-info">
                        {++i}. {book.title} by <strong>{book.author}</strong>
                     </div>
                     <div className="book-actions">
                        <span onClick={() => handleFavoriteBook(book.id)}>
                           {book.isFavorite ? (
                              <BsBookmarkStarFill className="star-icon" />
                           ) : (
                              <BsBookmarkStar className="star-icon" />
                           )}
                        </span>
                        <button type="button" onClick={() => handleDeleteBook(book.id)}>
                           remove
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default BookList;
