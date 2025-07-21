import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => (
  <>
    <Header />
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid gap-6">
        {users.map(user => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </main>
  </>
);

export async function getStaticProps() {
	
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: UserProps[] = await res.json();
  
	return {
	  props: { users },
	};
  }

export default Users
