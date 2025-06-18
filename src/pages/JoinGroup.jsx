import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import create from "../assets/CreateGroup.svg";
import { toast } from "react-hot-toast";


function JoinGroup() {

    const [groupCode, setGroupCode] = useState("");
    const navigate = useNavigate();

    const handleJoin = () => {
        if (!groupCode.trim()) {
            toast.error("please enter a group code");
            return;
        }

        toast.success("Successfully joined the group!");
        setTimeout(() => {
            navigate("/team/dashboard");
        }, 2000);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white'>
            
            <img src={create} alt="join group" className="w-40 h-40 obeject-contain mb-6"/>

            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                Join a Group
            </h1>

            <p className="text-center text-gray-600 mb-6 max-w-sm text-base leading-relaxed">Enter the group code shared with you to join an existing team and collaborate on your SIWES progress.</p>

            <input
                type="text"
                placeholder="Enter Group Code"
                value={groupCode}
                onChange={(e) => setGroupCode(e.target.value)}
                 className="w-full max-w-sm px-4 py-3 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={handleJoin} className="mt-6 w-full max-w-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer">
                Join Group

            </button>

            <button onClick={() => navigate("/team")}className="mt-4 text-sm text-gray-500 underline hover:text-blue-600 transition-all cursor-pointer">
                ← Back to Team Options
            </button>
        </div>
    )
}

export default JoinGroup;