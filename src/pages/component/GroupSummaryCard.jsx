
import React from "react";
import { FaTasks, FaChartPie, FaUsers } from "react-icons/fa";

const GroupSummaryCard = ({ groupName, progress, logsToday, memberCount }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 space-y-4 w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
        📊 {groupName} - Today’s Summary
      </h2>

      
      <div className="flex items-center space-x-3">
        <FaChartPie className="text-indigo-500 text-lg" />
        <p className="text-gray-700">
          <span className="font-semibold">{progress}%</span> of SIWES completed
        </p>
      </div>

      
      <div className="flex items-center space-x-3">
        <FaTasks className="text-green-500 text-lg" />
        <p className="text-gray-700">
          <span className="font-semibold">{logsToday}</span> logs added today
        </p>
      </div>

      
      <div className="flex items-center space-x-3">
        <FaUsers className="text-purple-500 text-lg" />
        <p className="text-gray-700">
          <span className="font-semibold">{memberCount}</span> active members
        </p>
      </div>
    </div>
  );
};

export default GroupSummaryCard;
