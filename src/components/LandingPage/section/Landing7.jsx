import React from "react";
import { Link } from "react-router-dom";
import { Instagram, FacebookIcon } from "lucide-react";
import "@fontsource/changa"; // Defaults to weight 400
import "@fontsource/changa/500.css"; // Specify weight
import "@fontsource/changa/700.css"; // Specify weight and style

const ChatWindowLogo = () => (
  <div className="w-32 h-32 relative">
    {/* Chat window base */}
    <div className="absolute w-24 h-24 bg-indigo-600 rounded-lg shadow-lg">
      {/* Window header */}
      <div className="absolute top-2 left-2 flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>

      {/* Chat lines */}
      <div className="absolute top-8 left-3 space-y-1.5">
        <div className="w-12 h-1.5 bg-white/70 rounded"></div>
        <div className="w-16 h-1.5 bg-white/60 rounded"></div>
        <div className="w-10 h-1.5 bg-white/50 rounded"></div>
      </div>

      {/* Animated stairs coming out */}
      <div className="absolute -right-4 -top-4 origin-bottom-left animate-[emerge_1s_ease-out]">
        <div className="relative w-20 h-20">
          {/* Individual steps with staggered animations */}
          <div className="absolute bottom-0 right-0 w-16 h-2 bg-pink-500 transform rotate-45 animate-[step1_0.3s_ease-out]"></div>
          <div className="absolute bottom-4 right-4 w-16 h-2 bg-pink-500 transform rotate-45 animate-[step2_0.4s_ease-out]"></div>
          <div className="absolute bottom-8 right-8 w-16 h-2 bg-pink-500 transform rotate-45 animate-[step3_0.5s_ease-out]"></div>
          <div className="absolute bottom-12 right-12 w-16 h-2 bg-pink-500 transform rotate-45 animate-[step4_0.6s_ease-out]"></div>
        </div>
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>

    {/* Floating particles */}
    <div className="absolute top-0 right-0 animate-float-particle1">
      <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
    </div>
    <div className="absolute bottom-4 right-8 animate-float-particle2">
      <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
    </div>
  </div>
);

const Landing7 = () => {
  return (
    <div className="min-h-screen bg-purple-950 flex items-center justify-center px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Top right group */}
        <div className="absolute top-16 right-24 animate-pulse">
          <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-75" />
        </div>
        <div className="absolute top-32 right-48 animate-bounce">
          <div className="w-2 h-2 bg-pink-400 rounded-full opacity-60" />
        </div>

        {/* Top left group */}
        <div className="absolute top-24 left-16 animate-ping">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-50" />
        </div>
        <div className="absolute top-48 left-32 animate-bounce">
          <div className="w-3 h-3 bg-green-400 rounded-full opacity-70" />
        </div>

        {/* Bottom elements */}
        <div className="absolute bottom-24 right-40 animate-bounce">
          <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-32 left-24 animate-pulse">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-70" />
        </div>

        {/* Center elements */}
        <div className="absolute top-1/2 right-1/4 animate-ping">
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-50" />
        </div>
        <div className="absolute top-1/3 left-1/3 animate-bounce">
          <div className="w-2 h-2 bg-teal-400 rounded-full opacity-60" />
        </div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/3 animate-spin-slow">
          <div className="w-4 h-4 border-2 border-cyan-400 rotate-45 opacity-30" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-spin-slow">
          <div className="w-4 h-4 border-2 border-pink-400 rotate-45 opacity-30" />
        </div>

        {/* Additional geometric shapes */}
        <div className="absolute top-1/2 left-16 animate-bounce">
          <div className="w-3 h-3 border-2 border-yellow-400 rounded-full opacity-40" />
        </div>
        <div className="absolute bottom-1/4 right-20 animate-pulse">
          <div className="w-3 h-3 border-2 border-green-400 rotate-45 opacity-40" />
        </div>
      </div>

      <div className="max-w-7xl w-full flex gap-16 relative z-10">
        {/* Left column - Logo and illustration */}
        <div className="w-1/4 flex flex-col justify-between">
          <ChatWindowLogo />
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            Hiqqo Quiz
          </Link>
        </div>

        {/* Right column - Heading and navigation */}
        <div className="w-3/4 flex flex-col">
          {/* Heading */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-white mb-2" style={{fontFamily: "Changa, sans-serif"}}>
              Climb higher
              <span className="inline-block ml-2">
                <span className="text-yellow-400 animate-pulse">✦</span>
              </span>
            </h1>
            <p className="text-4xl font-bold text-white" style={{fontFamily: "Changa, sans-serif"}}>
              education that elevates
            </p>
          </div>

          {/* Footer navigation */}
          <div className="grid grid-cols-3 gap-8 text-white mb-16">
            {/* Products column */}
            <div>
              <h2 className="font-semibold mb-4">Products</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/k12"
                    className="hover:text-white transition-colors"
                  >
                    For K12
                  </Link>
                </li>
                <li>
                  <Link
                    to="/higher-ed"
                    className="hover:text-white transition-colors"
                  >
                    For Higher Ed
                  </Link>
                </li>
                <li>
                  <Link
                    to="/children"
                    className="hover:text-white transition-colors"
                  >
                    For Children
                  </Link>
                </li>
                <li>
                  <Link
                    to="/parents"
                    className="hover:text-white transition-colors"
                  >
                    For Parents
                  </Link>
                </li>
                <li>
                  <Link
                    to="/enterprise"
                    className="hover:text-white transition-colors"
                  >
                    For Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h2 className="font-semibold mb-4">Company</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business"
                    className="hover:text-white transition-colors"
                  >
                    Hiqqo Quiz Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teach"
                    className="hover:text-white transition-colors"
                  >
                    Teach on Hiqqo Quiz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us column */}
            <div>
              <h2 className="font-semibold mb-4">Follow us</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://facebook.com/Hiqqo-quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/Hiqqo-quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2024 Hiqqo Quiz. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing7;
