import Card from "@/components/common/Card";
import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import Property from "@/constants/property";

export default function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };
  return (
    <>
      <Header />
	  <h1 className="text-center">Welcome to the home page of my project!</h1>
      <div className="p-4 flex justify-center items-center">
    
        <button
          onClick={() => setIsModalOpen(true)}
          className=" mt-4 border bg-blue-400"
        >
          Add New property
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {Property.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}

        {posts.map((post, id) => (
          <Card key={`user-post-${id}`} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
}
