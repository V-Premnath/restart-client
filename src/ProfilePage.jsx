import React from "react";

const ProfilePage = () => {
  return (
    <div style={styles.profileContainer}>
      <h1 style={styles.profileTitle}>User Profile</h1>
      <div style={styles.profileDetails}>
        <img
          src="https://via.placeholder.com/150" // Replace with actual avatar URL
          alt="User Avatar"
          style={styles.profileAvatar}
        />
        <h2 style={styles.profileName}>John Doe</h2>
        <p style={styles.profileEmail}>john.doe@example.com</p>
        <p style={styles.profileBio}>
          A passionate student interested in technology, coding, and innovation.
        </p>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb", // Tailwind's gray-50
    padding: "2rem",
  },
  profileTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#1f2937", // Tailwind's gray-800
    marginBottom: "2rem",
  },
  profileDetails: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  profileAvatar: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "1rem",
  },
  profileName: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  profileEmail: {
    fontSize: "1.25rem",
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  profileBio: {
    fontSize: "1rem",
    color: "#4b5563", // Tailwind's gray-600
    maxWidth: "400px",
  },
};

export default ProfilePage;