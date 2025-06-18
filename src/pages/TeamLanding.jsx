import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/group-icon.svg";

function TeamLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white px-5 py-10">
      <div className="w-full max-w-md text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          👥 Team Collaboration
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Create or join a group to track your SIWES journey together, share progress, and stay accountable with your peers.
        </p>
      </div>

      <div className="mt-8 mb-6">
        <img 
          src={icon}
          alt="Teamwork illustration"
          className="w-40 h-40 object-contain mx-auto"
        />
      </div>

      <div className="w-full max-w-sm space-y-5">
        <button
          onClick={() => navigate("/team/create")}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-blue-600 hover:to-indigo-700  transition-all cursor-pointer"
        >
          Create a Group
        </button>

        <button
          onClick={() => navigate("/team/join")}
          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-cyan-600 hover:to-teal-600 transition-all cursor-pointer"
        >
          🔗 Join a Group
        </button>
      </div>
    </div>
  );
}

export default TeamLanding;
