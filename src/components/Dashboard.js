import React, { useState, useEffect } from 'react';

// Sample data (replace this with actual API calls in a real application)
const sampleUser = {
  id: 1,
  fullName: 'Felix Heenga',
  email: 'john.doe@example.com',
};

const sampleOrganizations = [
  {
    id: 101,
    name: 'NACOS',
    description: 'Nigeria Association of Computing Students (NACOS)',
  },
  {
    id: 102,
    name: 'Faculty of Science Student Association',
    description: 'A club for coding enthusiasts',
  },
];

const UserDashboard = () => {
  const [user, setUser] = useState(sampleUser);
  const [organizations, setOrganizations] = useState(sampleOrganizations);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Welcome, {user.fullName}!</h2>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Your Organizations</h3>
          {organizations.length > 0 ? (
            <ul>
              {organizations.map((org) => (
                <li key={org.id} className="mb-2">
                  <strong className="text-indigo-600">{org.name}</strong> - {org.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>You are not a part of any organizations.</p>
          )}
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Upcoming Elections</h3>
          <p className="text-gray-600">No upcoming elections at the moment.</p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <p className="text-gray-600">No recent activity to display.</p>
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
