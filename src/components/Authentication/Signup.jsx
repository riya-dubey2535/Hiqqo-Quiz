import React, { useState } from "react";
import { motion } from "framer-motion";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Password validation regex (min 8 chars, 1 uppercase, 1 special character, 1 number)
  const passwordRegex = /^(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address with '@'.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
      return;
    }

    setError("");  // Clear error message if validation is successful

    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", { // Updated port here
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Show success message
        alert("Signup successful! Redirecting to login...");
        
        // Redirect to login page
        window.location.href = "/login";  // This will redirect to the login page
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[rgb(8,25,72)] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative backdrop-blur-md"
        style={{ backgroundColor: "rgb(247, 199, 226)" }}
      >
        <div className="shadow-lg rounded-md p-8 flex flex-col md:flex-row w-full max-w-4xl mx-4 md:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left p-6 text-black font-bold"
          >
            <h1 className="text-3xl mb-4">Welcome!</h1>
            <p className="text-sm text-gray-700">
              Sign up now to access amazing features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 p-6"
          >
            <h2 className="text-2xl mb-4 text-black font-bold">Sign Up</h2>

            <motion.label className="block text-black font-bold mb-1">Username</motion.label>
            <motion.input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-400 mb-4"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <motion.label className="block text-black font-bold mb-1">Email</motion.label>
            <motion.input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-400 mb-4"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <motion.label className="block text-black font-bold mb-1">Password</motion.label>
            <motion.input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg text-black placeholder-black focus:ring-2 focus:ring-blue-400 mb-4"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

            <motion.button
              className="w-full bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-700 transition font-bold"
              onClick={handleSubmit}
            >
              Sign Up
            </motion.button>

            <motion.p className="text-sm text-black mt-4 text-center font-bold">
              Already have an account?{" "}
              <a href="./Login" className="text-pink-700 font-bold">
                Login here
              </a>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;