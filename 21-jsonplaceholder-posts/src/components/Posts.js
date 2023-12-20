import "./Posts.css";
import loadImg from "../images/arrow-clockwise.svg";

import Post from "./Post";
import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = function () {
   const [posts, setPosts] = useState(null);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      fetch(URL)
         .then((res) => res.json())
         .then((json) => setPosts(json))
         .catch((error) => setError(error.message))
         .finally(() => setTimeout(() => setIsLoading(true), 5000));
   }, []);

   if (error) {
      return <h1>Error: {error}</h1>;
   }

   return (
      <div className="posts">
         {isLoading ? (
            posts.map((post) => <Post key={post.id} {...post} />)
         ) : (
            <figure className="loading">
               <img src={loadImg} alt="loading" />
            </figure>
         )}
      </div>
   );
};

export default Posts;
