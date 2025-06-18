
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import ProgressSummary from "./ProgressSummary";
import TimeProgress from "./TimeProgress";

function Dashboard() {
    const [activity, setActivity] = useState("");
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState("");
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("siwesEntries");
        if (stored) setEntries(JSON.parse(stored));
        const savedName = localStorage.getItem("siwesFullName");
        if (savedName) {
            setUserName(savedName);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("siwesEntries", JSON.stringify(entries));
        
    }, [entries]);

    const handleAddEntry = () => {
        if (activity.trim() === "") return;
        const newEntry = {
            text: activity,
            date: new Date().toLocaleDateString(),
            image: previewUrl || null,
        };

        setEntries([newEntry, ...entries]);
        setActivity("");
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    const handleDelete = (index) => {
        setEntries(entries.filter((_, i) => i !== index));
    };

    const handleEdit = (index, currentText) => {
        setEditIndex(index);
        setEditedText(currentText);
    };

    const handleSaveEdit = () => {
        const updated = entries.map((entry, i) =>
            i === editIndex ? { ...entry, text: editedText } : entry
        );
        setEntries(updated);
        setEditIndex(null);
        setEditedText("");
    };

    const filteredEntries = entries.filter((entry) =>
        entry.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="dashboard-wrapper">
            <h2>Welcome back{userName ? `, ${userName}` : ""}🎉</h2>
            <header className="dashboard-header">
                <h1> SIWES Tracker</h1>
            </header>


            <ProgressSummary />
            <TimeProgress entries={entries} />

            <div className="entry-form">
                <textarea
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="📝 What did you do today?"
                    rows={3}
                ></textarea>
                <button onClick={handleAddEntry}>Add Entry</button>
            </div>
                <h4 className="orland">OR</h4>
            <div className="upload-section">
                <label htmlFor="screenshotUpload" className="upload-label">
                    📎 Upload Screenshot
                </label>
                <input
                    type="file"className=" text-sm text-slate-500 file:rounded-full file:border-0 file:bg-[#003cff] file:p-3 file:px-4 file:text-sm file:font-semibold file:text-[#ffffff]" 
                    id="screenshotUpload"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                {previewUrl && (
                    <div className="image-preview">
                        <img src={previewUrl} alt="Screenshot Preview" />
                        <div className="preview-footer">
                            <p>{selectedFile?.name}</p>
                            <button className="delete-img-btn" onClick={() => {
                                setSelectedFile(null);
                                setPreviewUrl(null);
                            }}> Remove</button>
                        </div>
                    </div>
                )}
            </div>


            <div className="search-section">
                <input
                    type="text"
                    placeholder="🔍 Search your logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="log-section">
                {filteredEntries.length === 0 ? (
                    <p className="no-entries">No entries found.</p>
                ) : (
                    filteredEntries.map((entry, index) => (
                        <div className="log-entry" key={index}>
                            <div className="entry-content">
                                <span className="entry-date">{entry.date}</span>
                                {editIndex === index ? (
                                    <>
                                        <textarea
                                            className="edit-textarea"
                                            value={editedText}
                                            onChange={(e) => setEditedText(e.target.value)}
                                        />
                                        <button onClick={handleSaveEdit}>✅ Save</button>
                                    </>
                                ) : (
                                    <p>{entry.text}</p>
                                )}
                            </div>

                            {entry.image && (
                                <div className="attach-image">
                                    <img src={entry.image} alt="Attached screenshot" />
                                </div>
                            )}
                            <div className="entry-actions">
                                {editIndex !== index && (
                                    <button className="edi-button" onClick={() => handleEdit(index, entry.text)}>Edit</button>
                                )}
                                <button className="del-button" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
                
            <div className="team-collab-card" onClick={() => navigate("/team")}>
            <h3>👥 Team Collaboration</h3>
            <p>Track SIWES with friends, stay accountable, and grow together.</p>
            <button className="team-join-btn">Go to Team</button>
            </div>
            
            <button className="back-home-btn" onClick={() => navigate("/")}>
            ← Back to Home
            </button>

            
        </div>
    );
}

export default Dashboard;
