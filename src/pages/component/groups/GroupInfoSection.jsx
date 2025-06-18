import React, { useState } from "react";
import { FiEdit, FiCheck, FiX, FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";

function GroupInfoSection() {
  const [editing, setEditing] = useState(false);
  const [groupName, setGroupName] = useState("SIWES Team Alpha");
  const [tagline, setTagline] = useState("Learning & Growing Together 💡");
  const [groupCode, setGroupCode] = useState("G-482A");

  const [tempName, setTempName] = useState(groupName);
  const [tempTagline, setTempTagline] = useState(tagline);

  const handleCopy = () => {
    navigator.clipboard.writeText(groupCode);
    toast.success("Group code copied!");
  };

  const handleSave = () => {
    setGroupName(tempName);
    setTagline(tempTagline);
    setEditing(false);
    toast.success("Group info updated");
  };

  const handleCancel = () => {
    setTempName(groupName);
    setTempTagline(tagline);
    setEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-3xl mx-auto mb-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        
        <div className="flex gap-4 items-start">
          <div className="w-14 h-14 min-w-[56px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold">
            🧑‍💻
          </div>

         
          <div>
            {editing ? (
              <>
                <input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="text-xl font-semibold mb-1 w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
                <input
                  value={tempTagline}
                  onChange={(e) => setTempTagline(e.target.value)}
                  className="text-sm text-gray-600 w-full border-b border-gray-200 focus:outline-none focus:border-indigo-400"
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  {groupName}
                  <FiEdit
                    className="text-gray-500 hover:text-indigo-600 cursor-pointer"
                    onClick={() => setEditing(true)}
                    title="Edit group info"
                  />
                </h2>
                <p className="text-sm text-gray-500">{tagline}</p>
              </>
            )}
          </div>
        </div>

        
        <div className="flex flex-col md:items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 rounded-md">
              Code: {groupCode}
            </span>
            <button
              onClick={handleCopy}
              className="text-indigo-500 text-sm hover:underline"
            >
              <FiCopy className="inline-block mr-1" />
              Copy
            </button>
          </div>

          {editing && (
            <div className="flex gap-2 mt-1">
              <button
                onClick={handleSave}
                className="text-green-600 hover:text-green-800"
                title="Save"
              >
                <FiCheck className="text-xl" />
              </button>
              <button
                onClick={handleCancel}
                className="text-red-500 hover:text-red-700"
                title="Cancel"
              >
                <FiX className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GroupInfoSection;
