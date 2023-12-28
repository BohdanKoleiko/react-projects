import "./Posts.css";
import loadImg from "../images/arrow-clockwise.svg";

import Post from "./Post";
import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = function () {
   //const [posts, setPosts] = useState([]);
   //const [error, setError] = useState("");
   //const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState({ posts: [], error: "", isLoading: true });

   function handler(name, value) {
      setData((prevState) => ({ ...prevState, [name]: value }));
   }

   useEffect(() => {
      console.log("useEffect is running");
      (async () => {
         try {
            const res = await fetch(URL);
            const posts = await res.json();
            //setPosts(posts);
            handler("posts", posts);
         } catch (error) {
            //setError(error.message);
            handler("error", error.message);
         }

         //setIsLoading(true);
         handler("isLoading", false);
      })();
   }, []);

   //useEffect(() => {
   //   fetch(URL)
   //      .then((res) => res.json())
   //      .then((json) => setPosts(json))
   //      .catch((error) => setError(error.message))
   //      .finally(() => setIsLoading(true));
   //}, []);

   if (data.error) {
      return <h1>Error: {data.error}</h1>;
   }

   return (
      <div className="posts">
         {!data.isLoading ? (
            data.posts.map((post) => <Post key={post.id} {...post} />)
         ) : (
            <figure className="loading">
               <img src={loadImg ? loadImg : ""} alt="loading" />
            </figure>
         )}
      </div>
   );
};

export default Posts;
