import React, { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { cardStyles, buttonStyles, workoutStyles } from "../../styles/styles";
import { getCurrentWorkout, workoutTips } from "../../data/workouts";

const WorkoutTab = ({
  currentDay,
  setDailyCaloriesBurned,
  setCompletedWorkouts,
}) => {
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);

  const currentWorkout = getCurrentWorkout(currentDay);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isWorkoutActive) {
      interval = setInterval(() => {
        setWorkoutTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWorkoutActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startWorkout = () => {
    setIsWorkoutActive(true);
    setWorkoutTimer(0);
  };

  const stopWorkout = () => {
    setIsWorkoutActive(false);
    const caloriesBurned = Math.round(
      (workoutTimer / 60) * (currentWorkout.calories / 30)
    );
    setDailyCaloriesBurned((prev) => prev + caloriesBurned);
    setCompletedWorkouts((prev) => ({
      ...prev,
      [currentDay]: true,
    }));
  };

  return (
    <div>
      {/* Workout Header */}
      <div style={cardStyles.orangeGradient}>
        <h2
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}
        >
          {currentWorkout.name}
        </h2>
        <p style={{ fontSize: "14px", opacity: 0.9 }}>
          Target: {currentWorkout.calories} kalori
        </p>
      </div>

      {/* Timer Card */}
      <div style={cardStyles.card}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={workoutStyles.timer}>{formatTime(workoutTimer)}</div>
          <button
            onClick={isWorkoutActive ? stopWorkout : startWorkout}
            style={isWorkoutActive ? buttonStyles.danger : buttonStyles.success}
          >
            {isWorkoutActive ? (
              <>
                <Pause size={20} style={{ marginRight: "8px" }} />
                Stop
              </>
            ) : (
              <>
                <Play size={20} style={{ marginRight: "8px" }} />
                Mula
              </>
            )}
          </button>
        </div>
      </div>

      {/* Exercise List */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Senaman Hari Ini
        </h3>
        <div>
          {currentWorkout.exercises.map((exercise, index) => (
            <div key={index} style={workoutStyles.exerciseItem}>
              <div style={workoutStyles.exerciseNumber}>{index + 1}</div>
              <span style={{ color: "#1f2937" }}>{exercise}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Workout Tips */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Tips Senaman
        </h3>
        <div style={{ fontSize: "14px", color: "#6b7280" }}>
          {workoutTips.map((tip, index) => (
            <p key={index} style={{ marginBottom: "8px" }}>
              • {tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutTab;
