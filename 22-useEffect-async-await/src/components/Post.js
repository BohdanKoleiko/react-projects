import person from "../images/person-fill.svg";
import dots from "../images/three-dots.svg";
import "./Post.css";

const Post = function (prop) {
   const postPublishingDate = new Date();
   const { title, body } = prop;

   return (
      <div className="post">
         <div className="post__header">
            <div className="post__person-info">
               <figure className="post__avatar">
                  <img src={person} alt="temporarily person" />
               </figure>

               <div className="post__meta">
                  <span className="post__avatar-name">Sabrina Gul</span>
                  <span className="post__date">{`${postPublishingDate.getDate()}.${
                     postPublishingDate.getMonth() + 1
                  }.${postPublishingDate.getFullYear()}`}</span>
               </div>
            </div>

            <img src={dots} alt="show more" className="post__show-more" />
         </div>

         <div className="post__body">
            <div className="post__title">{title[0].toUpperCase() + title.substring(1)}</div>
            <p className="post__text">{body}</p>
         </div>
      </div>
   );
};

export default Post;
