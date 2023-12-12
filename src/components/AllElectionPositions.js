import React, { useState, useEffect } from 'react';

// Sample data (replace this with actual API calls in a real application)
const sampleOrganization = {
  id: 401,
  name: 'Nigeria Association of Computing Students (NACOS)',
  description: 'Representing computing students in Nigeria',
};

const sampleElection = {
  id: 201,
  title: 'Student Council Election',
  description: 'Vote for the student council representatives',
};

const samplePositions = [
  { id: 501, title: 'President' },
  { id: 502, title: 'Vice President' },
  { id: 503, title: 'Secretary' },
];

const AllElectionPositions = () => {
  const [organization, setOrganization] = useState(sampleOrganization);
  const [election, setElection] = useState(sampleElection);
  const [positions, setPositions] = useState(samplePositions);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">
          Positions for "{election.title}" in "{organization.name}"
        </h2>

        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className="text-indigo-600">Organization:</strong> {organization.name}
          </li>
          <li className="mb-2">
            <strong className="text-indigo-600">Election:</strong> {election.title}
          </li>
          <li className="mb-2">
            <strong className="text-indigo-600">Description:</strong> {election.description}
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-4">Available Positions</h3>

        <ul>
          {positions.map((position) => (
            <li key={position.id} className="mb-2">
              <strong className="text-indigo-600">{position.title}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllElectionPositions;
