import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "./Tracker.css";

function Tracker({ onSave }) {
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("6");
    const [university, setUniversity] = useState("");
    const [department, setDepartment] = useState("");
    const [fullName, setFullName] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const savedStart = localStorage.getItem("siwesStartDate");
        const savedDuration = localStorage.getItem("siwesDuration");
        const savedUni = localStorage.getItem("siwesUniversity");
        const savedDept = localStorage.getItem("siwesDepartment");
        const savedName = localStorage.getItem("siwesFullName");

        if (savedStart) setStartDate(savedStart);
        if (savedDuration) setDuration(savedDuration);
        if (savedUni) setUniversity(savedUni);
        if (savedDept) setDepartment(savedDept);
        if (savedName) setFullName(savedName);
    }, []);

    const handleSave = () => {
        if (!startDate || !duration || !university || !department || !fullName) return;

        const start = new Date(startDate);
        const months = parseInt(duration);
        const end = new Date(start);
        end.setMonth(start.getMonth() + months);

        localStorage.setItem("siwesStartDate", startDate);
        localStorage.setItem("siwesDuration", duration);
        localStorage.setItem("siwesEndDate", end.toISOString());
        localStorage.setItem("siwesUniversity", university);
        localStorage.setItem("siwesDepartment", department);
        localStorage.setItem("siwesFullName", fullName);

        onSave(startDate, duration);
        navigate('/dashboard');
    };

    return (
        <motion.div
            className="tracker-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
            >
                Setup Your SIWES Tracker
            </motion.h3>

            <motion.label initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Full Name:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} 
                placeholder='Enter your full name...'/>
            </motion.label>

            <motion.label initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                University:
                <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} 
                placeholder='Enter your university...'/>
            </motion.label>

            <motion.label initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Department:
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} 
                placeholder='Department (e.g. Computer Science)'/>
            </motion.label>

            <motion.label initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Start Date:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </motion.label>

            <motion.div
                className="duration-options"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <label>
                    <input type="radio" value="3" checked={duration === "3"} onChange={(e) => setDuration(e.target.value)} />
                    3 Months
                </label>
                <label>
                    <input type="radio" value="4" checked={duration === "4"} onChange={(e) => setDuration(e.target.value)} />
                    4 Months
                </label>
                <label>
                    <input type="radio" value="6" checked={duration === "6"} onChange={(e) => setDuration(e.target.value)} />
                    6 Months
                </label>
            </motion.div>

            <motion.button
                className='setup-button'
                onClick={handleSave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                Save
            </motion.button>
        </motion.div>
    );
}

export default Tracker;
