import React from 'react';

const Result = ({ score, total, restart }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold">Your Score: {score}/{total}</h2>
    <button
      onClick={restart}
      className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
    >
      Restart Quiz
    </button>
  </div>
);

export default Result;
