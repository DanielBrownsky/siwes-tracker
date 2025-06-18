import GroupActionBar from "./component/GroupActionBar";
import GroupHeader from "./component/GroupHeader";
import GroupSummaryCard from "./component/GroupSummaryCard";
import MemberStats from "./component/MemberStats";
import RecentGroupLogs from "./component/RecentGroupLogs";


const GroupDashboard = () => {

    const dummyLogs = [
  {
    userName: "Daniel",
    timeAgo: "2h ago",
    entrySnippet: "Completed the summary card component and cleaned up the layout.",
  },
  {
    userName: "Teni",
    timeAgo: "4h ago",
    entrySnippet: "Finalized the sign-up authentication logic and tested login.",
  },
  {
    userName: "Chuks",
    timeAgo: "6h ago",
    entrySnippet: "Updated team description and added new member to the group.",
  },
];

  return (
    <div className="min-h-screen bg-gray-100 py-1 px-2 space-y-4">
      <GroupHeader />
      <GroupSummaryCard />
      <MemberStats
        activeCount={5}
        topPerformer={{ name: "Teni", count: 6 }}
        you={{ name: "You", count: 4 }}
      />
      <RecentGroupLogs logs={dummyLogs} />
      <GroupActionBar />
      


     
    </div>
  );
};

export default GroupDashboard;
