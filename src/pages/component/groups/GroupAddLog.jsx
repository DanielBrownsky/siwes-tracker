// GroupAddLog.jsx
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import log  from "../../../assets/group-log.png";

function GroupAddLog() {
  const [title, setTitle] = useState("");
  const [activity, setActivity] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const navigate = useNavigate();

  // replaceing this with Firestore call later
  const handleAutoFill = () => {
    const today = new Date().toLocaleDateString();
    const personalLogs = JSON.parse(localStorage.getItem("siwesLogs")) || [];
    const todayLog = personalLogs.find(log => log.date === today);

    if (todayLog) {
      setTitle(todayLog.title);
      setActivity(todayLog.description);
      toast.success("Auto-filled from your personal log! 🎉");
    } else {
      toast.warn("No log found for today.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !activity) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Firestore logic //
    console.log("Submitting group log:", { title, activity, screenshot });

    toast.success("Log submitted to group successfully!");
    navigate("/team/dashboard"); 
  };

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
      <div className="max-w-xl mx-auto">
        <img
          src={log}
          alt="Group log"
          className="w-36 h-36 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">
          Add Group Log
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Worked on Dashboard UI"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">What did you do today?</label>
            <textarea
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your task today"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Upload Screenshot (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600 file:py-2 file:px-3 file:border file:rounded file:border-gray-300 file:bg-gray-100"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleAutoFill}
              className="text-sm text-indigo-600 underline hover:text-indigo-500"
            >
              Auto-fill from personal log
            </button>

            <button
              type="submit"
              className="bg-gradient-to-r  from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700"
            >
              Submit Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GroupAddLog;
