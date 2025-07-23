import React from "react";
import { type PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  if (!isOpen) return null;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
    onClose();
  };
  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-500 p-4 rounded-lg shadow-md text-2xl"
      >
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label> <br/>
		<label>
          Content:
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label> <br/>
		<button type="submit" className="bg-blue-700 text-white p-2 rounded">
			add post
		</button>
		<button
		  type="button"
		  onClick={onClose}
		  className="bg-red-500 text-white p-2 rounded ml-2"
		>
		  Close
		</button>
      </form>
    </div>
  );
};
export default PostModal