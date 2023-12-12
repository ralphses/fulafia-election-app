import React, { useState, useEffect } from 'react';

// Sample data (replace this with actual API calls in a real application)
const sampleElection = {
  id: 201,
  title: 'Student Council Election',
  description: 'Vote for the student council representatives',
};

const sampleCandidates = [
  { id: 301, name: 'Candidate 1', totalVotes: 150 },
  { id: 302, name: 'Candidate 2', totalVotes: 220 },
  { id: 303, name: 'Candidate 3', totalVotes: 180 },
];

const AllElectionResults = () => {
  const [election, setElection] = useState(sampleElection);
  const [candidates, setCandidates] = useState(sampleCandidates);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">
          Election Results for "{election.title}"
        </h2>

        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className="text-indigo-600">Election:</strong> {election.title}
          </li>
          <li className="mb-2">
            <strong className="text-indigo-600">Description:</strong> {election.description}
          </li>
        </ul>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4 font-bold">ID</th>
              <th className="py-2 px-4 font-bold">Name</th>
              <th className="py-2 px-4 font-bold">Total Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="border-t border-gray-300">
                <td className="py-2 px-4">{candidate.id}</td>
                <td className="py-2 px-4">{candidate.name}</td>
                <td className="py-2 px-4">{candidate.totalVotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllElectionResults;
