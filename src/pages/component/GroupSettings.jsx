import GroupActions from "./groups/GroupAction";
import GroupInfoSection from "./groups/GroupInfoSection";
import GroupMembersList from "./groups/GroupMembers";
import GroupPreferences from "./groups/GroupPreferences";


function GroupSettings() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      
      <GroupInfoSection
        groupName="SIWES Team Alpha"
        groupId="team-alpha-2025"
        createdAt="June 10, 2025"
      />
      <GroupMembersList />
      <GroupPreferences />
      <GroupActions  userRole="Admin" />
     
    </div>
  );
}

export default GroupSettings;
