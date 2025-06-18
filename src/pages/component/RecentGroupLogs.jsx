import React from "react";
import { FaClock } from "react-icons/fa";

function RecentGroupLogs({ logs }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 w-full mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Recent Updates</h2>

            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {logs?.lenght === 0 ? (
                    <p className="text-gray-500 text-sm">No logs yet today.</p>
                ): (
                    logs?.slice(0, 5).map((log, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition">
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <span className="font-medium text-gray-800">{log.username}</span>
                                <span className="flex items-center gap-1">
                                    <FaClock className="text-gray-400" />
                                </span>
                            </div>
                            <p className="mt-1 text-gray-700 text-sm line-clamp-2">{log.entrySnippet}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default RecentGroupLogs;