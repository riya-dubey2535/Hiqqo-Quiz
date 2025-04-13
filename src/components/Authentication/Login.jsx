import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import axios
import api from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import { DataProvider } from "../../App";

function Login() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 const {token,setToken} = useContext(DataProvider)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Password is required.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post(
        "/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        alert("Login successful! Redirecting to dashboard...");
        setToken(response.data.token)
        nav("/dashboard");
      } else {
        setError(
          response.data.message ||
            "Invalid email or password. Please try again."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      nav("/dashboard");
    }
  },[token,nav]);
  return (
    <div className="relative flex items-center justify-center bg-white min-h-screen  bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative  p-8 shadow-lg border rounded-[8px] bg-white w-full max-w-4xl mx-4 md:mx-0"
      >
        <div className="flex flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left p-6 text-black font-bold"
          >
            <h1 className="text-3xl mb-4">Welcome Back!</h1>
            <p className="text-sm text-gray-400">
              Login to your account and continue your journey with us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="md:w-1/2 p-6"
          >
            <h2 className="text-2xl mb-4 text-black font-bold">Login</h2>
            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 px-4 py-2 border border-black bg-white/10 rounded-[8px] text-black placeholder-black focus:outline-none focus:ring-1 focus:ring-pink-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-black font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full mt-2 px-4 py-2 border border-black bg-white/10 rounded-[8px] text-black placeholder-black focus:outline-none focus:ring-1 focus:ring-pink-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className={`w-full btn h-[40px] text-white `}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </motion.button>
              <motion.p className="text-sm text-black mt-4 text-center font-bold">
                Forgot Password?{" "}
                <Link
                  to={"/forgot-pass"}
                  className="text-purple-400 font-bold hover:text-purple-300"
                >
                  Click Here
                </Link>
              </motion.p>

              <motion.p className="text-sm text-black mt-4 text-center font-bold">
                New User?{" "}
                <Link
                  to={"/signup"}
                  className="text-purple-400 font-bold hover:text-purple-300"
                >
                  Signup here
                </Link>
              </motion.p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;