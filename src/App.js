import React, { useState } from "react";
import Header from "./components/Layout/Header";
import BottomNav from "./components/Layout/BottomNav";
import HomeTab from "./components/Tabs/HomeTab";
import WorkoutTab from "./components/Tabs/WorkoutTab";
import RunningTab from "./components/Tabs/RunningTab";
import ProgressTab from "./components/Tabs/ProgressTab";
import { appStyles } from "./styles/styles";

const App = () => {
  // Main app state
  const [activeTab, setActiveTab] = useState("home");
  const [currentDay, setCurrentDay] = useState(1);
  const [weight] = useState(80);
  const [targetWeight] = useState(74);
  const [dailyCaloriesBurned, setDailyCaloriesBurned] = useState(0);
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const [notifications, setNotifications] = useState(true);

  // Props untuk pass ke components
  const appData = {
    currentDay,
    setCurrentDay,
    weight,
    targetWeight,
    dailyCaloriesBurned,
    setDailyCaloriesBurned,
    completedWorkouts,
    setCompletedWorkouts,
    notifications,
    setNotifications,
  };

  // Render different tabs
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab {...appData} />;
      case "workout":
        return <WorkoutTab {...appData} />;
      case "running":
        return <RunningTab {...appData} />;
      case "progress":
        return <ProgressTab {...appData} />;
      default:
        return <HomeTab {...appData} />;
    }
  };

  return (
    <div style={appStyles.container}>
      <Header
        notifications={notifications}
        setNotifications={setNotifications}
      />

      <div style={appStyles.content}>{renderContent()}</div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Notification Toast */}
      {notifications && (
        <div style={appStyles.notification}>
          <p style={{ fontSize: "14px", margin: 0 }}>
            ⏰ Masa untuk workout! Jangan skip hari ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
