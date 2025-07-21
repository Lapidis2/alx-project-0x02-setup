import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 mb-8 shadow">
      <nav className="container mx-auto flex space-x-6">
        <Link href="/home" className="text-blue-600 hover:text-blue-800 font-semibold">Home
        </Link>
        <Link href="/about" className="text-blue-600 hover:text-blue-800 font-semibold">About
        </Link>
        <Link href="/posts" className="text-blue-600 hover:text-blue-800 font-semibold">Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
