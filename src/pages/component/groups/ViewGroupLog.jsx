import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

function ViewGroupLog() {
    const navigate = useNavigate();

    const logs = [
        {
      id: 1,
      user: "Daniel Ayeku",
      time: "10:45 AM",
      title: "Built the dashboard layout",
      snippet: "Worked on the flex structure and added the group cards...",
    },
    {
      id: 2,
      user: "Teni B.",
      time: "11:30 AM",
      title: "Implemented login validation",
      snippet: "Handled edge cases for empty fields and password mismatch...",
    },
    {
      id: 3,
      user: "Zee M.",
      time: "12:15 PM",
      title: "Styled the progress summary",
      snippet: "Used Tailwind to build a responsive card for the progress bar...",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-6 bg-white">
        <div className="flex items-center mb-6">
            <button onClick={() => navigate("/team/dashboard")} className="flex items-center text-purple-600 hover:text-purple-800 font-medium">
                <FiArrowLeft className="mr-2"/>
            </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">📒 Group Logs</h2>
        <p className="text-sm text-gray-600 mb-6">Review logs submitted by your group members.</p>

        <div className="space-y-4">
            {logs.map((log) => (
                <motion.div key={log.id}
                initial={{opacity:0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration:0.4 }} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
                    <div className="flex justify-between items-center mb-1">
                        <p className="font-semibold text-gray-800">{log.user}</p>
                        <span className="text-xs text-gray-500">{log.time}</span>
                    </div>
                    <h3 className="font-medium text-sm text-purple-700">{log.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{log.snippet}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )

}

export default ViewGroupLog