import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authMode === "signup" && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // values to the Firebase handler 
    const payload = {
      email,
      password,
      ...(authMode === "signup" && { name })
    };

    console.log("Form submitted:", payload);
    if (authMode === "signin") {
      navigate("/setup"); // assuming user is new
    } else {
      navigate("/dashboard"); // assuming users already have an account direct to dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-2">SIWES Tracker</h1>
        <p className="text-center text-gray-600 mb-6">          {authMode === "signin"
            ? "Sign in to continue your journey"
            : "Create a new account"}
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setAuthMode("signin")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              authMode === "signin"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setAuthMode("signup")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              authMode === "signup"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-2.5 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {authMode === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          {authMode === "signin" && (
            <div className="text-right text-sm text-blue-500 hover:underline">
              Forgot password?
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all"
          >
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center text-sm mt-2">
            {authMode === "signin"
              ? "Don’t have an account?"
              : "Already have an account?"}{" "}
            <span
              onClick={toggleAuthMode}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {authMode === "signin" ? "Sign up" : "Sign in"}
            </span>
          </div>

          <hr className="my-4" />

          <button
            type="button"
            className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
// This code is a simple authentication page with sign-in and sign-up functionality.