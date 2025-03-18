import React from "react";

const QuizPage = () => {
  const participants = [
    {
      name: "Neha Khan",
      image:
        "https://i.pinimg.com/736x/b4/9a/33/b49a33bc0948bd8b96ec6d08e2537d90.jpg",
    },
    { name: "John Doe", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Jane Smith", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Alex Johnson", image: "https://i.pravatar.cc/150?img=10" },
    { name: "Michael Brown", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Sarah Lee", image: "https://i.pravatar.cc/150?img=12" },
    { name: "David Clark", image: "https://i.pravatar.cc/150?img=13" },
    { name: "Linda Walker", image: "https://i.pravatar.cc/150?img=14" },
    { name: "Olivia Harris", image: "https://i.pravatar.cc/150?img=15" },
  ];

  return (
    <div className="min-h-screen bg-customPurple flex flex-col items-center text-white">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 max-w-6xl">
        <div className="text-3xl font-bold">Qwizy</div>
        <div className="flex items-center space-x-4">
          <button className="bg-red-500 px-4 py-2 rounded-3xl text-black font-semibold">
            Leave
          </button>
          <button className="bg-gray-800 px-4 py-2 rounded-3xl">
            Neha’s Dashboard
          </button>
        </div>
      </div>

      {/* Quiz Waiting Box */}
      <div className="mt-3 p-3 rounded-lg shadow-md max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center">
          Waiting for the host to start the quiz
        </h1>
        <p className="text-center mt-4 text-lg">
          The quiz will begin shortly...
        </p>

        {/* Participants List - Using Flexbox and Wrap */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {participants.map((participant, index) => (
            <div
              key={index}
              className="p-4 text-center w-1/3 md:w-1/4 lg:w-1/5"
            >
              <img
                src={participant.image}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-2 border-4 border-gray-300"
              />
              <span className="text-white block">{participant.name}</span>
              <span className="text-sm text-gray-400">Waiting...</span>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold">
            Host will start the quiz in:
          </h3>
          <div className="mt-4">
            <span className="text-5xl font-bold">00:03</span>{" "}
            {/* Countdown timer can be dynamically updated */}
          </div>
        </div>

        {/* Start Button (If Host) */}
        <div className="mt-8 text-center">
          <button className="bg-btnColor px-6 py-2 rounded-lg text-white font-semibold hover:bg-btnHover">
            Start Quiz (Host)
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
