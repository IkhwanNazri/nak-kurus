import React, { useState } from "react";
import { Timer, Flame } from "lucide-react";
import { cardStyles, buttonStyles, layoutStyles } from "../../styles/styles";
import { runningTips } from "../../data/workouts";

const RunningTab = ({ setDailyCaloriesBurned }) => {
  const [runningStats, setRunningStats] = useState({
    distance: 0,
    pace: 0,
    calories: 0,
    duration: 0,
  });

  const simulateRun = () => {
    const newStats = {
      distance: 2.5 + Math.random() * 2,
      pace: 5.5 + Math.random() * 1.5,
      calories: 150 + Math.round(Math.random() * 100),
      duration: 900 + Math.round(Math.random() * 600),
    };

    setRunningStats(newStats);
    setDailyCaloriesBurned((prev) => prev + newStats.calories);
  };

  return (
    <div>
      {/* Running Header */}
      <div style={cardStyles.blueGradient}>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Tracking Larian
        </h2>
        <div style={layoutStyles.grid2}>
          <div>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Jarak</p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {runningStats.distance.toFixed(2)} km
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Pace</p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {runningStats.pace.toFixed(1)} min/km
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={layoutStyles.grid2}>
        <div style={{ ...cardStyles.card, textAlign: "center" }}>
          <Timer size={32} style={{ margin: "0 auto 8px", color: "#3b82f6" }} />
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Masa</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {Math.floor(runningStats.duration / 60)}:
            {(runningStats.duration % 60).toString().padStart(2, "0")}
          </p>
        </div>
        <div style={{ ...cardStyles.card, textAlign: "center" }}>
          <Flame size={32} style={{ margin: "0 auto 8px", color: "#f97316" }} />
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Kalori</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {runningStats.calories}
          </p>
        </div>
      </div>

      {/* Simulation Button */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Simulasi Larian
        </h3>
        <button
          onClick={simulateRun}
          style={{ ...buttonStyles.primary, width: "100%" }}
        >
          Rekod Larian Hari Ini
        </button>
      </div>

      {/* Running Tips */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Tips Larian
        </h3>
        <div style={{ fontSize: "14px", color: "#6b7280" }}>
          {runningTips.map((tip, index) => (
            <p key={index} style={{ marginBottom: "8px" }}>
              • {tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RunningTab;
