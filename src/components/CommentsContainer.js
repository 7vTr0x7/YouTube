import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [],
  },
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
    ],
  },
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [],
  },
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [],
      },
      {
        name: "vTrox",
        comment: "jbcbkzjbklcbjlkjbkjbckjz",
        replies: [
          {
            name: "vTrox",
            comment: "jbcbkzjbklcbjlkjbkjbckjz",
            replies: [],
          },
          {
            name: "vTrox",
            comment: "jbcbkzjbklcbjlkjbkjbckjz",
            replies: [],
          },
          {
            name: "vTrox",
            comment: "jbcbkzjbklcbjlkjbkjbckjz",
            replies: [
              {
                name: "vTrox",
                comment: "jbcbkzjbklcbjlkjbkjbckjz",
                replies: [],
              },
              {
                name: "vTrox",
                comment: "jbcbkzjbklcbjlkjbkjbckjz",
                replies: [],
              },
              {
                name: "vTrox",
                comment: "jbcbkzjbklcbjlkjbkjbckjz",
                replies: [],
              },
              {
                name: "vTrox",
                comment: "jbcbkzjbklcbjlkjbkjbckjz",
                replies: [
                  {
                    name: "vTrox",
                    comment: "jbcbkzjbklcbjlkjbkjbckjz",
                    replies: [],
                  },
                  {
                    name: "vTrox",
                    comment: "jbcbkzjbklcbjlkjbkjbckjz",
                    replies: [],
                  },
                  {
                    name: "vTrox",
                    comment: "jbcbkzjbklcbjlkjbkjbckjz",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "vTrox",
            comment: "jbcbkzjbklcbjlkjbkjbckjz",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [],
  },
  {
    name: "vTrox",
    comment: "jbcbkzjbklcbjlkjbkjbckjz",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comment={commentsData} />
    </div>
  );
};

export default CommentsContainer;
