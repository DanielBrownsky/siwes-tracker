import React from "react";
import { useNavigate } from "react-router-dom";

function TeamPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent mb-4 tracking-wide">
        Welcome to Team Collaboration
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-md text-base leading-relaxed">
        Create or join a group to track your SIWES journey together, share progress, and stay accountable with your peers.
      </p>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => navigate("/team/create")}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-800 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
        >
          ➕ Create a Group
        </button>

        <button
          onClick={() => navigate("/team/join")}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md hover:from-green-600 hover:to-emerald-700 transition-all"
        >
          👥 Join a Group
        </button>
      </div>
    </div>
  );
}

export default TeamPage;

