import React from "react";
import { Home, Calendar, Activity, MapPin } from "lucide-react";
import { navStyles } from "../../styles/styles";

const BottomNav = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "workout", icon: Activity, label: "Workout" },
    { id: "running", icon: MapPin, label: "Running" },
    { id: "progress", icon: Calendar, label: "Progress" },
  ];

  return (
    <div style={navStyles.bottomNav}>
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          style={activeTab === id ? navStyles.navItemActive : navStyles.navItem}
        >
          <Icon size={24} style={{ marginBottom: "4px" }} />
          <span style={{ fontSize: "12px" }}>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
