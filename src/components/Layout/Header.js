import React from "react";
import { Bell } from "lucide-react";
import { headerStyles } from "../../styles/styles";

const Header = ({ notifications, setNotifications }) => {
  return (
    <div style={headerStyles.header}>
      <h1 style={headerStyles.title}>try</h1>

      <button
        onClick={() => setNotifications(!notifications)}
        style={{
          ...headerStyles.bellButton,
          color: notifications ? "#3b82f6" : "#9ca3af",
        }}
      >
        <Bell size={20} />
      </button>
    </div>
  );
};

export default Header;
