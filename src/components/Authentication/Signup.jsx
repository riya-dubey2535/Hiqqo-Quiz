import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import axios
import api from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { DataProvider } from "../../App";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();
   const {token,setToken} = useContext(DataProvider)
  // Password validation regex (min 8 chars, 1 uppercase, 1 special character, 1 number)
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

    setError(""); // Clear error message if validation is successful

    try {
      const response = await api.post(
        "/auth/signup",
        { name: username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 201) {
        // Show success message
        alert("Signup successful! Redirecting to login...");
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token)

        // Redirect to login page
        nav("/login"); // This will redirect to the login page
      } else {
        setError(response.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen  bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-[8px] bg-white border shadow-2xl"
      >
        <div className="shadow-lg rounded-md p-8 flex flex-col md:flex-row w-full max-w-4xl mx-4 md:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left p-6 text-white"
          >
            <h1 className="text-3xl mb-4 font-bold text-black">Welcome!</h1>
            <p className="text-sm text-gray-400">
              Sign up now to access amazing features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 p-6"
          >
            <h2 className="text-2xl mb-4  font-bold text-black">Sign Up</h2>

            <form onSubmit={handleSubmit}>
              <motion.label className="block text-black font-bold mb-1">
                Name
              </motion.label>
              <motion.input
                type="text"
                className="w-full p-2 border border-gray-300 text-black placeholder-gray-500 outline-none rounded-[8px] focus:ring-1 focus:ring-pink-500 mb-4"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <motion.label className="block text-black font-bold mb-1">
                Email
              </motion.label>
              <motion.input
                type="email"
                className="w-full p-2 border border-gray-300  text-black placeholder-gray-500 outline-none rounded-[8px] focus:ring-1 focus:ring-pink-500 mb-4"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <motion.label className="block text-black font-bold mb-1">
                Password
              </motion.label>
              <motion.input
                type="password"
                className="w-full p-2 border border-gray-300  text-black placeholder-gray-500 outline-none rounded-[8px] focus:ring-1 focus:ring-pink-500 mb-4"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-purple-600 btn text-white p-2 rounded-lg hover:bg-purple-700 transition font-bold"
              >
                Sign Up
              </motion.button>
            </form>

            <motion.p className="text-sm text-black mt-4 text-center font-bold">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-purple-400 font-bold hover:text-purple-300"
              >
                Login here
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
