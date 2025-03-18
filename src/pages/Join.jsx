import React from "react";

const JoinPage = () => {
  return (
    <div className="min-h-screen bg-customPurple flex flex-col items-center text-white">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 max-w-6xl">
        <div className="text-3xl font-bold">Qwizy</div>
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 px-4 py-2 rounded-3xl text-black font-semibold">
            Go to shop
          </button>
          <button className="bg-gray-800 px-4 py-2 rounded-3xl">
            Neha’s Dashboard
          </button>
        </div>
      </div>

      {/* Join Box */}
      <div className="mt-10 bg-secondary p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center">Enter a join code</h1>
        <div className="flex mt-4 space-x-2">
          <input
            type="text"
            placeholder="Enter code"
            className="px-4 py-2 rounded-3xl text-black outline-none w-64"
          />
          <button className="bg-btnColor px-6 py-2 rounded-3xl hover:bg-btnHover">
            Join
          </button>
        </div>
      </div>

      {/* Assigned Activities */}
      <div className="mt-12 max-w-5xl w-full">
        <h2 className="text-xl font-semibold mb-4">Assigned activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Easy Quiz",
              questions: 20,
              accuracy: "50%",
              color: "bg-yellow-500",
            },
            {
              title: "Hard Level",
              questions: 10,
              accuracy: "50%",
              color: "bg-yellow-500",
            },
            {
              title: "Intermediate Level",
              questions: 15,
              accuracy: "80%",
              color: "bg-green-500",
            },
            {
              title: "Easy Level Quiz",
              questions: 20,
              accuracy: "90%",
              color: "bg-green-500",
            },
          ].map((quiz, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-sm bg-gray-700 px-2 py-1 rounded-full">
                Assigned
              </span>
              <h3 className="text-lg font-semibold mt-2">{quiz.title}</h3>
              <p className="text-gray-400">{quiz.questions} Qs</p>
              <div
                className={`mt-2 px-4 py-1 text-black font-semibold rounded-lg ${quiz.color}`}
              >
                {quiz.accuracy} accuracy
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
