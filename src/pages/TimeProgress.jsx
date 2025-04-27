
import React, { useEffect, useState } from "react";
import "./TimeProgress.css";

function TimeProgress({ entries }) {
    const [weeklyLogs, setWeeklyLogs] = useState(0);
    const [mostActiveDay, setMostActiveDay] = useState("");

    useEffect(() => {
        const now = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(now.getDate() - 7);

        const logsThisWeek = entries.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate >= oneWeekAgo && entryDate <= now;
        });

        setWeeklyLogs(logsThisWeek.length);

        const dayCount = {};
        entries.forEach(entry => {
            const day = new Date(entry.date).toLocaleDateString("en-US", { weekday: "long" });
            dayCount[day] = (dayCount[day] || 0) + 1;
        });

        const sortedDays = Object.entries(dayCount).sort((a, b) => b[1] - a[1]);
        setMostActiveDay(sortedDays[0]?.[0] || "N/A");
    }, [entries]);

    return (
        <div className="summary">
            <h2>📊 Progress Summary</h2>
            <div className="summaryCards">
                <div className="summaryCard">
                    <h3>Total Logs</h3>
                    <p>{entries.length}</p>
                </div>
                <div className="summaryCard">
                    <h3>Logs this week</h3>
                    <p>{weeklyLogs}</p>
                </div>
                <div className="summaryCard">
                    <h3>Most active day</h3>
                    <p>{mostActiveDay}</p>
                </div>
            </div>
        </div>
    );
}

export default TimeProgress;
