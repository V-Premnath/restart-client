import React from "react";

const ClubsPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Club Categories Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Join Our Clubs</h2>
          <div style={styles.clubsContainer}>
            {[
              {
                name: "Film and Media Club",
                description: "Explore the world of filmmaking, photography, and media production.",
              },
              {
                name: "GATE Club",
                description: "Prepare for GATE exams with peer discussions, resources, and mock tests.",
              },
              {
                name: "Student Recreational Club",
                description: "Participate in fun activities, games, and recreational events.",
              },
              {
                name: "Green Club",
                description: "Promote sustainability and environmental awareness on campus.",
              },
            ].map((club, index) => (
              <div key={index} style={styles.clubCard}>
                <h3 style={styles.clubName}>{club.name}</h3>
                <p style={styles.clubDescription}>{club.description}</p>
                <button style={styles.joinButton} ><a href= "/clubs/joinrequest">Join Now</a></button>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Club Events Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Upcoming Club Events</h2>
          <div style={styles.eventsContainer}>
            {[
              {
                name: "Film Screening Night",
                club: "Film and Media Club",
                date: "2023-11-15",
                time: "6:00 PM - 9:00 PM",
              },
              {
                name: "GATE Mock Test",
                club: "GATE Club",
                date: "2023-11-18",
                time: "10:00 AM - 1:00 PM",
              },
              {
                name: "Talent Show",
                club: "Student Recreational Club",
                date: "2023-11-20",
                time: "4:00 PM - 7:00 PM",
              },
              {
                name: "Tree Plantation Drive",
                club: "Green Club",
                date: "2023-11-22",
                time: "9:00 AM - 12:00 PM",
              },
            ].map((event, index) => (
              <div key={index} style={styles.eventCard}>
                <h3 style={styles.eventName}>{event.name}</h3>
                <p style={styles.eventClub}>
                  <strong>Club:</strong> {event.club}
                </p>
                <p style={styles.eventDate}>
                  <strong>Date:</strong> {event.date}
                </p>
                <p style={styles.eventTime}>
                  <strong>Time:</strong> {event.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Club Activities Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Club Activities</h2>
          <div style={styles.activitiesContainer}>
            {[
              {
                club: "Film and Media Club",
                activity: "Weekly Film Discussion",
                progress: 75, // Progress percentage
              },
              {
                club: "GATE Club",
                activity: "Mock Test Series",
                progress: 60,
              },
              {
                club: "Student Recreational Club",
                activity: "Weekly Sports Day",
                progress: 90,
              },
              {
                club: "Green Club",
                activity: "Campus Cleanup Drive",
                progress: 50,
              },
            ].map((activity, index) => (
                
                <div key={index} style={styles.activityCard}>
                <h3 style={styles.activityClub}>{activity.club}</h3>
                <p style={styles.activityName}>{activity.activity}</p>
                <div style={styles.progressBarContainer}>
                  <div
                    style={{
                      ...styles.progressBar,
                      width: `${activity.progress}%`,
                    }}
                  ></div>
                </div>
                <p style={styles.progressText}>{activity.progress}% Completed</p>
              
              </div>
             
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <h1 style={styles.logo}>University Forum</h1>
        <ul style={styles.navLinks}>
        <h1 style={{marginLeft:"auto"}}> Clubs   </h1></ul>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p>&copy; 2023 University Forum. All rights reserved.</p>
        <p style={styles.footerCredit}>Designed with ❤️ for students.</p>
      </div>
    </footer>
  );
};

// Inline Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9fafb", // Tailwind's gray-50
  },
  navbar: {
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 50,
  },
  navbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 1.5rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3b82f6", // Tailwind's blue-600
  },
  navLinks: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: "#4b5563", // Tailwind's gray-700
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  mainContent: {
    flexGrow: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem",
    paddingTop: "5rem", // To account for the fixed navbar
  },
  section: {
    marginBottom: "4rem",
  },
  sectionTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#1f2937", // Tailwind's gray-800
    marginBottom: "1.5rem",
  },
  clubsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  clubCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 calc(25% - 2rem)",
    minWidth: "250px",
  },
  clubName: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  clubDescription: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  joinButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  eventsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  eventCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 calc(25% - 2rem)",
    minWidth: "250px",
  },
  eventName: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  eventClub: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  eventDate: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  eventTime: {
    color: "#4b5563", // Tailwind's gray-600
  },
  activitiesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  activityCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 calc(25% - 2rem)",
    minWidth: "250px",
  },
  activityClub: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  activityName: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  progressBarContainer: {
    backgroundColor: "#e5e7eb", // Tailwind's gray-200
    borderRadius: "0.25rem",
    height: "0.5rem",
    overflow: "hidden",
  },
  progressBar: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    height: "100%",
    borderRadius: "0.25rem",
  },
  progressText: {
    color: "#4b5563", // Tailwind's gray-600
    marginTop: "0.5rem",
  },
  footer: {
    backgroundColor: "#1f2937", // Tailwind's gray-800
    color: "#ffffff",
    padding: "1.5rem",
    textAlign: "center",
  },
  footerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerCredit: {
    fontSize: "0.875rem",
    color: "#9ca3af", // Tailwind's gray-400
    marginTop: "0.5rem",
  },
};

export default ClubsPage;