import Card from "@/components/common/Card";
import React,{useState} from "react"
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";


export default function Home() {
	const [posts,setPosts]=useState<{title:string;content:string}[]>([])
	const [isModalOpen,setIsModalOpen]=useState(false)
	const handleAddPost = (title: string, content: string) => {
		setPosts(prev => [...prev, { title, content }]);
	  };
  return (
<>
<Header/>
      <div className="p-4">
       
        <p>Welcome to the home page of my project!</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className=" mt-4 border bg-blue-400"
        >
          Add New Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {posts.length === 0 && <p>No posts yet. Add one!</p>}

      {posts.map((post, id) => (
        <Card key={id} title={post.title} content={post.content} />
      ))}
    </>
   
  );
}
