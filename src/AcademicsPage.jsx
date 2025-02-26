import React from "react";

const AcademicsPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Subject-wise Discussions */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Subject-wise Discussions</h2>
          <div style={styles.discussionsContainer}>
            {["Mathematics", "Physics", "Computer Science"].map((subject, index) => (
              <div key={index} style={styles.subjectCard}>
                <h3 style={styles.subjectTitle}>{subject}</h3>
                <p style={styles.subjectDescription}>
                  Discuss topics, ask questions, and share resources related to {subject}.
                </p>
                <button
                  style={styles.chatButton}
                  onClick={() => alert(`Open chatbot for ${subject}`)}
                >
                  Chat Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Assignments */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Assignments</h2>
          <div style={styles.assignmentsContainer}>
            {["CSE", "ECE", "ME"].map((branch, index) => (
              <div key={index} style={styles.branchCard}>
                <h3 style={styles.branchTitle}>{branch}</h3>
                <ul style={styles.assignmentList}>
                  <li style={styles.assignmentItem}>
                    <strong>Upcoming:</strong> Assignment 1 - Due Date: 2023-10-15
                  </li>
                  <li style={styles.assignmentItem}>
                    <strong>Completed:</strong> Assignment 2 - Submitted on 2023-10-10
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Exams Information */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Exams Information</h2>
          <div style={styles.examsContainer}>
            {["CSE", "ECE", "ME"].map((branch, index) => (
              <div key={index} style={styles.branchCard}>
                <h3 style={styles.branchTitle}>{branch}</h3>
                <ul style={styles.examList}>
                  <li style={styles.examItem}>
                    <strong>Upcoming:</strong> Midterm Exam - Date: 2023-11-01
                  </li>
                  <li style={styles.examItem}>
                    <strong>Completed:</strong> Quiz 1 - Held on 2023-10-05
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Chatbot Integration */}
      <ChatbotButton />
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
          <li ><a href= "/timetable">Timetable</a></li>
          <li><h1 style={{marginLeft:"auto"}}> Academics</h1></li>
        </ul>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <p>&copy; 2025 University Forum. All rights reserved.</p>
        <p style={styles.footerCredit}>Designed with ❤️ for students.</p>
      </div>
    </footer>
  );
};

// Chatbot Button Component
const ChatbotButton = () => {
  return (
    <div style={styles.chatbotButton}>
      <button
        style={styles.chatbotIcon}
        onClick={() => alert("Chatbot opened!")}
      >
        💬
      </button>
    </div>
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
  discussionsContainer: {
    display: "flex", // Use flexbox for row-wise layout
    gap: "2rem", // Space between cards
    overflowX: "auto", // Enable horizontal scrolling if needed
  },
  subjectCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    minWidth: "300px", // Minimum width for each card
  },
  subjectTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  subjectDescription: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  chatButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  assignmentsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  examsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
  },
  branchCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  branchTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "1rem",
  },
  assignmentList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  assignmentItem: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  examList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  examItem: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
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
  chatbotButton: {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
  },
  chatbotIcon: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "1rem",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
};

export default AcademicsPage;