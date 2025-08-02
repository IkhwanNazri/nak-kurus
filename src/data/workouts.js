// Workout data dan nutrition tips
export const dailyWorkouts = {
  1: {
    name: "Cardio Foundation",
    exercises: ["Brisk Walking 20min", "Jumping Jacks 3x30", "High Knees 3x20"],
    calories: 250,
  },
  2: {
    name: "Full Body Burn",
    exercises: ["Burpees 3x10", "Squats 3x15", "Push-ups 3x10", "Plank 3x30s"],
    calories: 300,
  },
  3: {
    name: "HIIT Cardio",
    exercises: [
      "Mountain Climbers 4x20",
      "Jump Squats 4x15",
      "Running in Place 4x30s",
    ],
    calories: 350,
  },
  4: {
    name: "Strength & Cardio",
    exercises: ["Lunges 3x12", "Push-ups 3x12", "Brisk Walking 25min"],
    calories: 280,
  },
  5: {
    name: "Fat Burn Circuit",
    exercises: ["Burpees 4x8", "Jump Rope (air) 4x45s", "Squat Pulses 4x20"],
    calories: 380,
  },
  6: {
    name: "Active Recovery",
    exercises: ["Yoga Flow 20min", "Walking 30min", "Stretching 10min"],
    calories: 200,
  },
  7: {
    name: "Weekly Challenge",
    exercises: ["All exercises combined", "Extended cardio 35min"],
    calories: 450,
  },
};

export const nutritionTips = [
  "Minum 2-3 liter air sehari",
  "Makan protein di setiap meal (telur, ayam, ikan)",
  "Kurangkan nasi, ganti dengan sayur",
  "Elak makanan bergoreng dan bergula",
  "Makan buah-buahan segar sebagai snack",
  "Sarapan dalam 1 jam bangun tidur",
  "Dinner sebelum jam 7 malam",
];

export const workoutTips = [
  "Buat warm-up 5 minit sebelum mula",
  "Rehat 30-60 saat antara set",
  "Fokus pada form yang betul",
  "Minum air sepanjang workout",
];

export const runningTips = [
  "Mulakan dengan brisk walk 5-10 minit",
  "Increase pace secara gradual",
  "Target: 20-30 minit cardio setiap hari",
  "Pace 6-7 min/km untuk fat burning",
];

// Helper function untuk dapatkan workout hari ni
export const getCurrentWorkout = (currentDay) => {
  const workoutKey = ((currentDay - 1) % 7) + 1;
  return dailyWorkouts[workoutKey];
};
