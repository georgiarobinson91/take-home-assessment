"use client";

import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "Have you ever suffered from an eating disorder such as Anorexia Nervosa or Bulimia?",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    text: "Are you pregnant or breast feeding or intending to become pregnant or start breast feeding whilst taking medication?",
    options: ["Yes", "No"],
  },
  {
    id: 3,
    text: "Are you allergic to orlistat?",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    text: "Are you using oral contraceptive?",
    options: ["Yes", "No"],
  },
  {
    id: 5,
    text: "Are you taking any medicine for high cholesterol, diabetes or high blood pressure?",
    options: ["Yes", "No"],
  },
];

const Page: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleData = (data: { [key: number]: string }) => {
    console.log(data);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    handleData(answers);
    return <div className="flex mt-20 justify-center">Thank you!</div>;
  }
  return (
    <>
      <header className="p-4 flex text-center">
        Answer a few quck and easy questions from our pharmacists to see what
        treatments you're eligible for
      </header>
      <div className=" border-gray-200 border-2 m-2 rounded">
        <p className="bg-gray-200">{currentQuestion.text}</p>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(currentQuestion.id, option)}
            className={`border border-gray-200 p-2 mt-2 mb-2 rounded ${
              option === "Yes" ? "rounded-r-none ml-2" : "rounded-l-none"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default Page;
