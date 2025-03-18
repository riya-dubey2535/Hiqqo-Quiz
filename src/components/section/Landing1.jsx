import React from 'react';
import img1 from './img1.png';

function Landing1() {
  return (
    <div className="flex flex-col min-h-screen bg-[rgb(8,25,72)] bg-cover bg-center">
      {/* Header */}
      <header className="bg-[rgb(8,25,72)] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">QuizMaster</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-300">Create a Quiz</a></li>
              <li><a href="#" className="hover:text-blue-300">Browse Quizzes</a></li>
              <li><a href="#" className="hover:text-blue-300">Leaderboard</a></li>
            </ul>
          </nav>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50"><a href="./Signup">Sign up</a></button>
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-[rgb(247,199,226)] py-20 flex-grow">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left side with text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Create and Play Quizzes Anytime, Anywhere</h2>
            <p className="mb-8">Build fun, engaging quizzes for yourself or your community, or explore challenges from others. Learn and grow while having fun!</p>
            <button className="bg-[rgb(8,25,72)] text-white px-6 py-3 rounded-full hover:bg-[rgba(8,25,72,0.84)]">Create your Quiz</button>
          </div>
          <img src={img1} alt="Quiz Image" className="w-120 h-120 object-cover rounded-lg" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(8,25,72)] text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 QuizMaster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing1;
