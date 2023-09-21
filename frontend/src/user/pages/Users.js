import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3
    },
    {
      id: 'u2',
      name: 'Jack',
      image:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      places: 2
    },
    {
      id: 'u3',
      name: 'Robert',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      places: 5
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
