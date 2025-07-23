import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow p-6 bg-gray-400 hover:shadow-md transition mb-4">
      <h2 className="text-xl font-semibold text-gray-800 ">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
