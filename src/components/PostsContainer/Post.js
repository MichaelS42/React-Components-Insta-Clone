// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  const [likes, setLikes] = useState(0)
  return (
    <div>
      <div className="post-border">
        <PostHeader
         username={props.post.username}
          thumbnailUrl={
          props.post.thumbnailUrl
          }
         />
       </div>
        <div className="post-image-wrapper">
          <img
           alt="post thumbnail"
           className="post-image"
           src={props.post.imageUrl}
          />
        </div>
      <div className="like-section-wrapper">
        <LikeSection 
          setlikes={setLikes}
          likes={likes}
        />
      </div>
      <div>
        <CommentSection
          postId={props.post.imageUrl}
          comments={props.post.comments}
        />
      </div>
    </div>
  );
};

export default Post;


