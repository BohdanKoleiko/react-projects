import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../redux/books/actionCreators";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (title && author) {
         const book = {
            title,
            author,
            id: uuidv4(),
            isFavorite: false,
         };
         dispatch(addBook(book));
         setTitle("");
         setAuthor("");
      }
   };

   const handleAddRandomBook = async () => {
      const rundomNumber = Math.floor(Math.random() * booksData.length);
      const pickRandomBook = {
         ...booksData[rundomNumber],
         id: uuidv4(),
         isFavorite: false,
      };
      dispatch(addBook(pickRandomBook));
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
         </form>
      </div>
   );
};

export default BookForm;
