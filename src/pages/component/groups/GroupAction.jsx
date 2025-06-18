import { FiLogOut, FiTrash2 } from "react-icons/fi";

const GroupActions = ({ userRole = "Admin" }) => {
  const handleLeaveGroup = () => {
    if (userRole === "Admin") {
      alert("Admins cannot leave the group. Please assign a new Admin first.");
    } else {
      alert("Leaving group... (feature coming soon)");
    }
  };

  const handleDeleteGroup = () => {
    if (userRole === "Admin") {
      const confirmed = window.confirm(
        "Are you sure you want to delete this group? This action cannot be undone."
      );
      if (confirmed) {
        alert("Deleting group... (feature coming soon)");
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 mt-6 p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-red-600 dark:text-red-400">Danger Zone</h2>

      <button
        onClick={handleLeaveGroup}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-white rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-600 transition"
      >
        <FiLogOut />
        Leave Group
      </button>

      {userRole === "Admin" && (
        <button
          onClick={handleDeleteGroup}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-700 text-red-800 dark:text-white rounded-lg hover:bg-red-200 dark:hover:bg-red-600 transition"
        >
          <FiTrash2 />
          Delete Group
        </button>
      )}
    </div>
  );
};

export default GroupActions;
