"use client";

import { useState } from "react";
import Button from "./Button2";

interface CommentItem {
  name: string;
  comment: string;
  date: string;
}

const Comment = () => {
  const [commentsList, setCommentsList] = useState<CommentItem[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const currentDate = new Date().toLocaleDateString();
      const newComment: CommentItem = { name, comment, date: currentDate };
      setCommentsList([...commentsList, newComment]);
      setName("");
      setComment("");
    }
  };

  return (
    <div className="lg:px-40 px-10 py-10">
      <h1 className="text-4xl font-semibold mb-4 text-color">
        Leave a Comment
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-dark text-color bg-card rounded-full outline-none "
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 border border-dark text-color bg-card rounded-2xl h-32 outline-none"
        ></textarea>
        <div className="flex gap-10 flex-wrap justify-between">
          <div className="flex lg:items-center">
            <input type="checkbox" id="saveInfo" className="mr-2 checkbox" />
            <label htmlFor="saveInfo" className="text-color">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <Button text="Submit" />
        </div>
      </form>

      <div className="space-y-4 mt-10">
        <h1 className="text-2xl font-bold text-color">Comments</h1>

        {commentsList.length > 0 ? (
          commentsList.map((commentItem, index) => (
            <div
              key={index}
              className="p-4 flex flex-wrap gap-10 items-center  rounded shadow-sm space-y-6"
            >
              <div className="flex  h-8 gap-1">
              <span className="py-2 px-4 bg-gray-800 rounded-full"></span>
              <div className="w-32 "> 
               
                 <h3 className="font-bold text-2xl text-dark">{commentItem.name}</h3>
                <span className="text-color text-sm mt-10">
                 {commentItem.date}
                 </span>
                 </div>
                 </div>
              <div className="border border-dark rounded-xl  p-10">
              <p className="font-semibold text-color">
                {commentItem.comment}
              </p>
              </div>
             
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            <i>No comments yet. Be the first to comment!</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
