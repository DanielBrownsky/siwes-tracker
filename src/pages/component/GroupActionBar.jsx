
import React from "react";
import { useNavigate } from "react-router-dom";

function GroupActionBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex justify-between items-center z-50 md:static md:border-none md:px-0 md:py-0 md:mt-6">
      <button
        onClick={() => navigate("/group/add-log")}
        className="flex-1 mr-2 bg-gradient-to-r from-blue-500 to-indigo-600  text-white py-3 rounded-xl font-semibold shadow-md hover:from-blue-600 hover:to-indigo-700  transition-all"
      >
        ➕ Add Log
      </button>
      <button
        onClick={() => navigate("/group/logs")}
        className="flex-1 ml-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold shadow-md hover:from-emerald-600 hover:to-green-600 transition-all"
      >
        📝 View Group Logs
      </button>
    </div>
  );
}

export default GroupActionBar;
