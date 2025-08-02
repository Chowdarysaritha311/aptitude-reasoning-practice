import React from 'react';

const QuestionCard = ({ data, handleAnswer }) => (
  <div className="bg-white shadow-lg p-6 rounded-xl">
    <h2 className="text-lg font-semibold mb-4">{data.question}</h2>
    <div className="grid grid-cols-2 gap-4">
      {data.options.map((opt, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(opt)}
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700"
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
