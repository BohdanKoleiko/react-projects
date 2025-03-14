import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addBook } from "../../redux/slices/booksSlice";
import createBookWithID from "../../utils/createBookWithID";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (title && author) {
         dispatch(addBook(createBookWithID({ title, author })));
         setTitle("");
         setAuthor("");
      }
   };

   const handleAddRandomBook = () => {
      const rundomIndex = Math.floor(Math.random() * booksData.length);
      dispatch(addBook(createBookWithID(booksData[rundomIndex])));
   };

   const handleAddRandomBookViaAPI = async () => {
      try {
         const res = await axios.get("http://localhost:5000/random-book");
         if (res?.data?.title && res?.data?.author) {
            dispatch(addBook(createBookWithID(res.data)));
         }
      } catch (error) {
         console.log("Error fetching random book", error);
      }
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
