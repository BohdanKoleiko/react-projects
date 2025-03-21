import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import createBookWithID from "../../utils/createBookWithID";
import booksData from "../../data/books.json";
import "./BookForm.css";
import { clearError, setError } from "../../redux/slices/errorSlice";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (title && author) {
         dispatch(addBook(createBookWithID({ title, author }, "manual")));
         setTitle("");
         setAuthor("");
      } else {
         dispatch(setError("You must fill title and author!"));
      }
   };

   const handleAddRandomBook = () => {
      const rundomIndex = Math.floor(Math.random() * booksData.length);
      dispatch(addBook(createBookWithID(booksData[rundomIndex], "random")));
   };

   const handleAddRandomBookViaAPI = async () => {
      dispatch(fetchBook());
   };

   return (
      <div className="app-block book-form">
         <h2>Add new book</h2>

         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="title">Title</label>
               <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>

            <div>
               <label htmlFor="author">Author</label>
               <input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               />
            </div>

            <button type="submit">Add Book</button>
            <button type="submit" onClick={handleAddRandomBook}>
               Add random book
            </button>
            <button type="button" onClick={handleAddRandomBookViaAPI}>
               Add random via API
            </button>
         </form>
      </div>
   );
};

export default BookForm;
