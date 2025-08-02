// All styles untuk weight loss app
export const appStyles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    paddingBottom: "80px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  content: {
    maxWidth: "448px",
    margin: "0 auto",
    padding: "16px",
  },
  notification: {
    position: "fixed",
    top: "80px",
    left: "16px",
    right: "16px",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    zIndex: 50,
    maxWidth: "448px",
    margin: "0 auto",
  },
};

export const headerStyles = {
  header: {
    backgroundColor: "white",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#1f2937",
  },
  bellButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
  },
};

export const navStyles = {
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTop: "1px solid #e5e7eb",
    padding: "8px 16px",
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    color: "#9ca3af",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  navItemActive: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    color: "#3b82f6",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export const cardStyles = {
  card: {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    marginBottom: "24px",
  },
  gradientCard: {
    background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "white",
    marginBottom: "24px",
  },
  orangeGradient: {
    background: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "white",
    marginBottom: "24px",
  },
  blueGradient: {
    background: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "white",
    marginBottom: "24px",
  },
  greenGradient: {
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    borderRadius: "16px",
    padding: "24px",
    color: "white",
    marginBottom: "24px",
  },
};

export const buttonStyles = {
  primary: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  success: {
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "24px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  danger: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "24px",
    padding: "12px 32px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  disabled: {
    backgroundColor: "#9ca3af",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "not-allowed",
  },
};

export const layoutStyles = {
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  flexRow: {
    display: "flex",
    gap: "16px",
  },
  textCenter: {
    textAlign: "center",
  },
  progressBar: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "9999px",
    height: "12px",
    marginBottom: "16px",
    overflow: "hidden",
  },
  progressFill: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: "9999px",
    transition: "width 0.5s ease",
  },
};

export const workoutStyles = {
  timer: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: "16px",
  },
  exerciseItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    marginBottom: "12px",
  },
  exerciseNumber: {
    width: "32px",
    height: "32px",
    backgroundColor: "#3b82f6",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    marginRight: "12px",
  },
};

export const progressStyles = {
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
  },
  calendarDay: {
    aspectRatio: "1",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  completedDay: {
    backgroundColor: "#10b981",
    color: "white",
  },
  currentDay: {
    backgroundColor: "#3b82f6",
    color: "white",
  },
  pastDay: {
    backgroundColor: "#d1d5db",
    color: "#6b7280",
  },
  futureDay: {
    backgroundColor: "#f3f4f6",
    color: "#9ca3af",
  },
};
