import React, { useState, useEffect, useRef } from "react";

const backendUrl = "http://192.168.103.29:8000"; // IP of the first laptop

export const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]); // State for announcements
  const [newAnnouncement, setNewAnnouncement] = useState(null); // State for new announcement notifications

  // Fetch announcements from the backend
  const getAnnouncements = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/announcements/`);
      const data = await response.json();
      if (response.status >= 200 && response.status < 300) {
        setAnnouncements(data.announcements);
      } else {
        console.error("Error fetching announcements");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Check for new announcements periodically
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${backendUrl}/api/announcements/`);
        const data = await response.json();
        if (response.status >= 200 && response.status < 300) {
          const latestAnnouncement = data.announcements[0]; // Get the latest announcement
          if (
            announcements.length === 0 ||
            latestAnnouncement.id !== announcements[0].id
          ) {
            setNewAnnouncement(latestAnnouncement); // Set new announcement for notification
            setAnnouncements(data.announcements); // Update announcements list
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }, 5000); // Check every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [announcements]);

  // Show push notification for new announcements
  useEffect(() => {
    if (newAnnouncement) {
      // Display a browser notification
      if (Notification.permission === "granted") {
        new Notification("New Announcement", {
          body: newAnnouncement.title,
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("New Announcement", {
              body: newAnnouncement.title,
            });
          }
        });
      }

      // Reset new announcement after notification
      setNewAnnouncement(null);
    }
  }, [newAnnouncement]);

  // Fetch announcements on component mount
  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <div style={styles.announcementsContainer}>
      <h2 style={styles.announcementsTitle}>Announcements</h2>
      {announcements.length > 0 ? (
        announcements.map((announcement) => (
          <div key={announcement.id} style={styles.announcementItem}>
            <h3 style={styles.announcementTitle}>{announcement.title}</h3>
            <p style={styles.announcementContent}>{announcement.content}</p>
            <p style={styles.announcementDate}>{announcement.created_at}</p>
          </div>
        ))
      ) : (
        <p style={{ color: "#a0aec0" }}>No announcements yet.</p>
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  announcementsContainer: {
    padding: "16px",
    backgroundColor: "#2d3748",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  announcementsTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#63b3ed",
  },
  announcementItem: {
    padding: "8px",
    backgroundColor: "#4a5568",
    borderRadius: "8px",
    marginBottom: "8px",
  },
  announcementTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
  },
  announcementContent: {
    fontSize: "14px",
    color: "#a0aec0",
  },
  announcementDate: {
    fontSize: "12px",
    color: "#a0aec0",
    textAlign: "right",
  },
};

export default Announcements;