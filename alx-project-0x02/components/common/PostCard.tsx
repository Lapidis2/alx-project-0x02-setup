import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg shadow-sm p-6 mb-4 bg-white hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-700 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-4">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
