
import React  from "react";
import { useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

function GroupHeader({ groupName = "SIWES Team Alpha" }) {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm rounded-xl border mb-4">
            <h2 className="text-xl font-bold text-gray-800">{groupName}</h2>

            <button title="Group Settings" className="p-2 rounded-full hover:bg-gray-100 transition" onClick={() => navigate("/team/settings")}>
                <FiSettings className="text-2xl text-gray-600" />
            </button>
        </div>
    )
}

export default GroupHeader;