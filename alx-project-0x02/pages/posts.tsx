import React from 'react';
import Header from "@/components/layout/Header";
export default function Post(){
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>Here are some posts.</p>
      </main>
    </>
  );
};


