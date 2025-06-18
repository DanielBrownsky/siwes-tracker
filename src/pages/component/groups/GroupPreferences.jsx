import React, { useState } from "react";
import { FiMail, FiBell, FiCheckCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const availableThemes = [
  { name: "Blue", color: "bg-blue-500" },
  { name: "Purple", color: "bg-purple-500" },
  { name: "Green", color: "bg-green-500" },
  { name: "Pink", color: "bg-pink-500" },
  { name: "Black", color: "bg-gray-800" },
];

const GroupPreferences = () => {
  const [theme, setTheme] = useState("Blue");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(false);

  const handleThemeChange = (name) => {
    setTheme(name);
    toast.info(`Theme changed to ${name} (not yet saved)`);
  };

  const handleSave = () => {
    toast.warn("Preferences saved locally. Connect Firebase to persist!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Group Preferences</h2>

      
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Select Theme Color</label>
        <div className="flex items-center gap-4">
          {availableThemes.map((t) => (
            <div
              key={t.name}
              className={`w-8 h-8 rounded-full cursor-pointer ${t.color} relative ring-2 ring-offset-2 ${
                theme === t.name ? "ring-black" : "ring-transparent"
              }`}
              title={t.name}
              onClick={() => handleThemeChange(t.name)}
            >
              {theme === t.name && (
                <FiCheckCircle className="absolute -top-2 -right-2 text-white bg-black rounded-full text-sm p-[1px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Email Alerts */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FiMail className="text-lg text-blue-600" />
          <span className="text-gray-700 font-medium">Email Alerts</span>
        </div>
        <button
          onClick={() => setEmailAlerts(!emailAlerts)}
          className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
            emailAlerts ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
              emailAlerts ? "translate-x-7" : ""
            }`}
          />
        </button>
      </div>

      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FiBell className="text-lg text-yellow-500" />
          <span className="text-gray-700 font-medium">Daily Logging Reminders</span>
        </div>
        <button
          onClick={() => setDailyReminder(!dailyReminder)}
          className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
            dailyReminder ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
              dailyReminder ? "translate-x-7" : ""
            }`}
          />
        </button>
      </div>

      
      <button
        onClick={handleSave}
        className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-indigo-600 hover:to-purple-700 transition-all"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default GroupPreferences;
