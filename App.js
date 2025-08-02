import React, { useState } from 'react';
import questions from './data/questions';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';

const App = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[index].answer) setScore(score + 1);
    if (index + 1 < questions.length) setIndex(index + 1);
    else setShowResult(true);
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto mt-10 p-4">
        {!showResult ? (
          <QuestionCard data={questions[index]} handleAnswer={handleAnswer} />
        ) : (
          <Result score={score} total={questions.length} restart={restartQuiz} />
        )}
      </main>
    </div>
  );
};

export default App;
