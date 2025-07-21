import React from 'react';
import Header from "@/components/layout/Header";

export default function About(){
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <p>Learn more about us here.</p>
      </main>
    </>
  );
};


