import React from "react";
import { Flame } from "lucide-react";
import { cardStyles, layoutStyles } from "../../styles/styles";
import { nutritionTips } from "../../data/workouts";

const HomeTab = ({ currentDay, weight, targetWeight, dailyCaloriesBurned }) => {
  const targetCaloriesBurn = 400;

  const calculateProgress = () => {
    return ((currentDay - 1) / 30) * 100;
  };

  const calculateWeightProgress = () => {
    const expectedLoss = ((currentDay - 1) / 30) * (weight - targetWeight);
    return Math.max(weight - expectedLoss, targetWeight);
  };

  return (
    <div>
      {/* Progress Card */}
      <div style={cardStyles.gradientCard}>
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}
        >
          Hari {currentDay} dari 30
        </h2>

        <div style={layoutStyles.progressBar}>
          <div
            style={{
              ...layoutStyles.progressFill,
              width: `${calculateProgress()}%`,
            }}
          />
        </div>

        <div style={layoutStyles.grid2}>
          <div>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Berat Semasa</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {calculateWeightProgress().toFixed(1)} kg
            </p>
          </div>
          <div>
            <p style={{ fontSize: "14px", opacity: 0.8 }}>Target</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              {targetWeight} kg
            </p>
          </div>
        </div>
      </div>

      {/* Calories Card */}
      <div style={cardStyles.card}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Flame size={20} style={{ marginRight: "8px", color: "#f97316" }} />
          Kalori Hari Ini
        </h3>

        <div style={layoutStyles.grid2}>
          <div style={layoutStyles.textCenter}>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#10b981" }}
            >
              {dailyCaloriesBurned}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>Terbakar</p>
          </div>
          <div style={layoutStyles.textCenter}>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#3b82f6" }}
            >
              {targetCaloriesBurn}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>Target</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "16px",
            backgroundColor: "#e5e7eb",
            borderRadius: "9999px",
            height: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(90deg, #10b981 0%, #3b82f6 100%)",
              height: "100%",
              borderRadius: "9999px",
              width: `${Math.min(
                (dailyCaloriesBurned / targetCaloriesBurn) * 100,
                100
              )}%`,
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* Nutrition Tip Card */}
      <div style={cardStyles.card}>
        <h3
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Tip Pemakanan Hari Ini
        </h3>
        <div
          style={{
            backgroundColor: "#dbeafe",
            padding: "16px",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#1e40af" }}>
            💡 {nutritionTips[(currentDay - 1) % nutritionTips.length]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
