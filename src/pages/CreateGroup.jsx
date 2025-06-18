import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Create from "../assets/CreateGroup.svg"; 

function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      setError("Group name is required.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    const groupCode = generateGroupCode();

    // Firestore logic //
    const groupData = {
      groupName,
      groupDescription,
      groupCode,
    };

    localStorage.setItem("groupData", JSON.stringify(groupData));
    navigate("/team/dashboard");
  };

  const generateGroupCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8 flex flex-col items-center">
      
      <motion.img
        src={Create}
        alt="Group Illustration"
        className="w-40 h-40 object-contain mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
    
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Create a New Group
      </h1>
      <p className="text-gray-600 text-center text-sm mb-6 max-w-xs">
        Start tracking SIWES with your team. Enter a name and optional description.
      </p>

      <div className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Description (optional)"
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {error && (
          <div className="text-sm text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <button
          onClick={handleCreateGroup}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer"
        >
          ✅ Create Group
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
