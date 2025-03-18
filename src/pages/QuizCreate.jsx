import React, { useState } from "react";

const AdminPage = () => {
  const [numQuestions, setNumQuestions] = useState(1); //
  const [quizData, setQuizData] = useState([]);
  const [quizCode, setQuizCode] = useState("");

  // Handle number of questions change
  const handleNumQuestionsChange = (e) => {
    const value = e.target.value;

    // Check if the value is a valid number
    if (value === "" || (Number(value) >= 1 && Number(value) <= 100)) {
      setNumQuestions(value);
    }
  };

  // Ensure that the number of questions is at least 1 when the user leaves the input field
  const handleBlur = () => {
    if (numQuestions < 1) {
      setNumQuestions(1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique code for the quiz (simple random string generator)
    const code = `QZ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setQuizCode(code);

    // Collect quiz data from the inputs
    const newQuizData = [];
    for (let i = 0; i < numQuestions; i++) {
      const question = document.getElementById(`question-${i}`).value;
      const options = [
        document.getElementById(`option-1-${i}`).value,
        document.getElementById(`option-2-${i}`).value,
        document.getElementById(`option-3-${i}`).value,
        document.getElementById(`option-4-${i}`).value,
      ];
      const answer = document.getElementById(`answer-${i}`).value;
      newQuizData.push({ question, options, answer, code });
    }

    // Add the new quiz data to state
    setQuizData([...quizData, ...newQuizData]);

    // Clear the form for the next set of questions
    setQuizCode(code);
  };

  return (
    <div className="min-h-screen bg-customPurple flex flex-col items-center text-white">
      <div className="w-full flex justify-between items-center p-4 max-w-6xl">
        <div className="text-3xl font-bold">Qwizy</div>
        <div className="flex items-center space-x-4">
          <button className="bg-red-500 px-4 py-2 rounded-lg text-black font-semibold">
            Leave
          </button>
          <button className="bg-gray-800 px-4 py-2 rounded-lg">
            Neha’s Dashboard
          </button>
        </div>
      </div>
      {/* Admin Form */}
      <div className="mt-10 bg-secondary p-6 rounded-lg shadow-md max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center">Create a New Quiz</h1>

        {/* Step 1: Input for Number of Questions */}
        <div className="mt-6">
          <label className="block text-xl font-semibold">
            Number of Questions
          </label>
          <input
            type="number"
            value={numQuestions}
            onChange={handleNumQuestionsChange}
            onBlur={handleBlur}
            min="1"
            className="w-full p-3 mt-2 rounded-lg text-black outline-none"
          />
        </div>

        {/* Step 2: Dynamically Generate Question Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {Array.from({ length: numQuestions }).map((_, index) => (
            <div key={index} className="space-y-4">
              <div>
                <label className="block text-xl font-semibold">
                  Question {index + 1}
                </label>
                <input
                  id={`question-${index}`}
                  type="text"
                  placeholder="Enter your question here"
                  className="w-full p-3 mt-2 rounded-lg text-black outline-none"
                />
              </div>
              <div>
                <label className="block text-xl font-semibold">Options</label>
                {Array.from({ length: 4 }).map((_, optionIndex) => (
                  <div key={optionIndex} className="mt-2">
                    <input
                      id={`option-${optionIndex + 1}-${index}`}
                      type="text"
                      placeholder={`Option ${optionIndex + 1}`}
                      className="w-full p-3 mt-2 rounded-lg text-black outline-none"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xl font-semibold">
                  Correct Answer
                </label>
                <input
                  id={`answer-${index}`}
                  type="text"
                  placeholder="Enter the correct answer"
                  className="w-full p-3 mt-2 rounded-lg text-black outline-none"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-btnColor px-6 py-2 rounded-lg text-white font-semibold hover:btnHover"
            >
              Generate Quiz Code
            </button>
          </div>
        </form>

        {/* Quiz Code Display */}
        {quizCode && (
          <div className="mt-8 text-center text-lg font-semibold">
            <p>Quiz Created! Use this code to access the quiz:</p>
            <p className="text-2xl text-yellow-500">{quizCode}</p>
          </div>
        )}
      </div>

      {/* Display Created Quizzes */}
      {quizData.length > 0 && (
        <div className="mt-12 max-w-4xl w-full">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Created Quizzes
          </h2>
          <div className="space-y-4">
            {quizData.map((quiz, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">{quiz.question}</h3>
                <ul className="list-disc pl-5 mt-2">
                  {quiz.options.map((option, idx) => (
                    <li key={idx} className="text-gray-300">
                      {option}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 text-green-400">
                  Correct Answer: {quiz.answer}
                </p>
                <p className="mt-2 text-yellow-500">Quiz Code: {quiz.code}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
