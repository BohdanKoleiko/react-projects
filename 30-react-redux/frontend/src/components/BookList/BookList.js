import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";

const BookList = () => {
   const books = useSelector((state) => state.books);
   const dispatch = useDispatch();

   const handleDeleteBook = (bookID) => {
      dispatch(deleteBook(bookID));
   };

   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p>No books available</p>
         ) : (
            <ul>
               {books.map((book, i) => (
                  <li className="" key={book.id}>
                     <div className="book-info">
                        {++i}. {book.title} by <strong>{book.author}</strong>
                     </div>
                     <div className="book-actions">
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
