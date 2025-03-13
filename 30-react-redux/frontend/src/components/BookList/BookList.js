import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import {
   selectTitleFilter,
   selectAuthorNameFilter,
   selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
   const books = useSelector((state) => state.books);
   const titleFilter = useSelector(selectTitleFilter);
   const authorFilter = useSelector(selectAuthorNameFilter);
   const favoriteFilter = useSelector(selectOnlyFavoriteFilter);
   const dispatch = useDispatch();

   const handleDeleteBook = (bookID) => {
      dispatch(deleteBook(bookID));
   };

   const handleFavoriteBook = (bookID) => {
      dispatch(toggleFavorite(bookID));
   };

   const filteredBooks = books.filter((book) => {
      const matchesTitle = book.title.toLowerCase().includes(titleFilter.toLowerCase());
      const matchesAuthor = book.author.toLowerCase().includes(authorFilter.toLowerCase());
      const matchesFavorite = favoriteFilter ? book.isFavorite : true;
      return matchesTitle && matchesAuthor && matchesFavorite;
   });

   const highLightMatch = (text, filter) => {
      if (!filter) return text;

      const regex = new RegExp(`(${filter})`, "gi");

      return text.split(regex).map((l, i) =>
         l.toLowerCase() === filter.toLowerCase() ? (
            <span className="highlight" key={i}>
               {l}
            </span>
         ) : (
            l
         ),
      );
   };

   return (
      <div className="app-block book-list">
         <h2>Book List</h2>
         {books.length === 0 ? (
            <p>No books available</p>
         ) : (
            <ul>
               {filteredBooks.map((book, i) => (
                  <li className="" key={book.id}>
                     <div className="book-info">
                        {++i}. {highLightMatch(book.title, titleFilter)} by{" "}
                        <strong>{highLightMatch(book.author, authorFilter)}</strong>
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
