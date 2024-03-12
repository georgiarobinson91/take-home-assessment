"use client";

import React, { useState } from "react";
import { useQuestions } from "./hook/useQuestions";
import { sendFormData } from "@/lib/apiClient";

const Page: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const [questions, loading] = useQuestions();

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion && questions.length > 0) {
    sendFormData(answers);
    return <div className="flex mt-20 justify-center">Thank you</div>;
  }

  if (loading) {
    return <>Loading…</>;
  }

  return (
    <>
      <header className="p-4 flex text-center">
        Answer a few quick and easy questions from our pharmacists to see what
        treatments you're eligible for
      </header>
      <form>
        <div className="border-gray-200 border-2 m-2 rounded">
          <p className="bg-gray-200 h-16 p-2">{currentQuestion.text}</p>
          {currentQuestion.options.map((option: string) => (
            <button
              key={option}
              type="button"
              onClick={() => handleAnswer(currentQuestion.id, option)}
              className={`border border-gray-800 p-2 mt-2 mb-2 rounded ${
                option === "Yes" ? "rounded-r-none ml-2" : "rounded-l-none"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </form>
    </>
  );
};

export default Page;
