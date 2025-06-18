import React from "react";
import { FaTrophy, FaUserCheck, FaUser } from "react-icons/fa";

function MemberStats({ activeCount, topPerformer, you }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Members Overview</h2>

      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FaUserCheck className="text-green-500" />
          <span>Active Members</span>
        </div>
        <span className="text-gray-900 font-bold">{activeCount}</span>
      </div>

      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FaTrophy className="text-yellow-500" />
          <span>Top Performer</span>
        </div>
        <span className="text-gray-900 font-bold">
          {topPerformer?.name || "N/A"} ({topPerformer?.count || 0})
        </span>
      </div>

      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FaUser className="text-blue-500" />
          <span>You</span>
        </div>
        <span className="text-gray-900 font-bold">{you?.count || 0}</span>
      </div>
    </div>
  );
}

export default MemberStats;
