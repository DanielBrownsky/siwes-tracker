import { useState } from "react";
import { FiUser, FiEdit2 } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const dummyMembers = [
  { id: 1, name: "Daniel", role: "Admin" },
  { id: 2, name: "Teni", role: "Member" },
  { id: 3, name: "Chuks", role: "Member" },
];

const GroupMembersList = () => {
  const [members] = useState(dummyMembers);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openEditModal = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedMember(null);
    setShowModal(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">Group Members</h2>

      <div className="space-y-3">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <FiUser className="text-xl text-purple-500" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">{member.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">{member.role}</p>
              </div>
            </div>
            <button
              onClick={() => openEditModal(member)}
              className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white transition"
            >
              <FiEdit2 />
            </button>
          </div>
        ))}
      </div>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80 shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <MdClose className="text-xl" />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Edit Role for {selectedMember.name}
            </h3>

            <div className="space-y-3">
              <button
                onClick={() => alert("Feature coming soon...")}
                className="w-full px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-white hover:bg-purple-200 dark:hover:bg-purple-700 transition"
              >
                Change Role
              </button>
              <button
                onClick={() => alert("Feature coming soon...")}
                className="w-full px-4 py-2 rounded-lg bg-red-100 dark:bg-red-700 text-red-600 dark:text-white hover:bg-red-200 dark:hover:bg-red-600 transition"
              >
                Remove from Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupMembersList;
// This component displays a list of group members with options to edit their roles or remove them from the group.