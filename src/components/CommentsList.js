import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comment }) => {
  return comment.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comment={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
