import React, { useState, useEffect } from "react";
import "./ProgressSummary.css";

function ProgressSummary() {
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    const startDate = localStorage.getItem("siwesStartDate");
    const duration = parseInt(localStorage.getItem("siwesDuration"));

    if (startDate && duration) {
      const start = new Date(startDate);
      const today = new Date();
      const end = new Date(start);
      end.setMonth(start.getMonth() + duration);

      const totalTime = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      const timePassed = Math.ceil((today - start) / (1000 * 60 * 60 * 24));
      const remaining = totalTime - timePassed;

      const percentage = Math.min(Math.round((timePassed / totalTime) * 100), 100);

      setTotalDays(totalTime);
      setDaysLeft(Math.max(0, remaining));
      setProgress(percentage);
    }
  }, []);

  return (
    <div className="progress-summary">
      <h3>Progress Summary</h3>

      <div className="progress-bar-wrapper">
        <p className="progress-percent">{progress}% completed</p>   
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
      </div>

      <p className="days-text">
        {daysLeft > 0
          ? `${daysLeft} days left out of ${totalDays} days`
          : "🎉 SIWES duration completed!"}
      </p>
    </div>
  );
}

export default ProgressSummary;
