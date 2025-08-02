import React from "react";
import { Trophy, Target } from "lucide-react";
import {
  cardStyles,
  buttonStyles,
  layoutStyles,
  progressStyles,
} from "../../styles/styles";

const ProgressTab = ({
  currentDay,
  setCurrentDay,
  weight,
  targetWeight,
  completedWorkouts,
}) => {
  const calculateWeightProgress = () => {
    const expectedLoss = ((currentDay - 1) / 30) * (weight - targetWeight);
    return Math.max(weight - expectedLoss, targetWeight);
  };

  const getCalendarDayStyle = (day) => {
    let dayStyle = { ...progressStyles.calendarDay };

    if (completedWorkouts[day]) {
      return { ...dayStyle, ...progressStyles.completedDay };
    } else if (day === currentDay) {
      return { ...dayStyle, ...progressStyles.currentDay };
    } else if (day < currentDay) {
      return { ...dayStyle, ...progressStyles.pastDay };
    } else {
      return { ...dayStyle, ...progressStyles.futureDay };
    }
  };

  const goToPreviousDay = () => {
    setCurrentDay(Math.max(1, currentDay - 1));
  };

  const goToNextDay = () => {
    setCurrentDay(Math.min(30, currentDay + 1));
  };

  return (
    <div>
      {/* Progress Header */}
      <div style={cardStyles.greenGradient}>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Progress Journey
        </h2>
        <div style={layoutStyles.textCenter}>
          <p style={{ fontSize: "48px", fontWeight: "bold" }}>
            {Object.keys(completedWorkouts).length}/30
          </p>
          <p style={{ fontSize: "14px", opacity: 0.9 }}>Hari Completed</p>
        </div>
      </div>

      {/* Calendar */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Kalendar Workout
        </h3>
        <div style={progressStyles.calendarGrid}>
          {Array.from({ length: 30 }, (_, i) => {
            const day = i + 1;
            return (
              <div key={day} style={getCalendarDayStyle(day)}>
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Stats */}
      <div style={layoutStyles.grid2}>
        <div style={{ ...cardStyles.card, textAlign: "center" }}>
          <Trophy
            size={32}
            style={{ margin: "0 auto 8px", color: "#eab308" }}
          />
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Achievement</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {Math.round((Object.keys(completedWorkouts).length / 30) * 100)}%
          </p>
        </div>
        <div style={{ ...cardStyles.card, textAlign: "center" }}>
          <Target
            size={32}
            style={{ margin: "0 auto 8px", color: "#8b5cf6" }}
          />
          <p style={{ fontSize: "14px", color: "#6b7280" }}>Berat Loss</p>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            {(weight - calculateWeightProgress()).toFixed(1)} kg
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={layoutStyles.flexRow}>
        <button
          onClick={goToPreviousDay}
          style={
            currentDay === 1
              ? { ...buttonStyles.disabled, flex: 1 }
              : { ...buttonStyles.primary, flex: 1, backgroundColor: "#6b7280" }
          }
          disabled={currentDay === 1}
        >
          Hari Sebelum
        </button>
        <button
          onClick={goToNextDay}
          style={
            currentDay === 30
              ? { ...buttonStyles.disabled, flex: 1 }
              : { ...buttonStyles.primary, flex: 1 }
          }
          disabled={currentDay === 30}
        >
          Hari Seterus
        </button>
      </div>
    </div>
  );
};

export default ProgressTab;
