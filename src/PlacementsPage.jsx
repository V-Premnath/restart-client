import React from "react";

const PlacementsPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Upcoming Placement Drives */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Upcoming Placement Drives</h2>
          <div style={styles.drivesContainer}>
            {["Google", "Microsoft", "Amazon", "Infosys", "TCS"].map((company, index) => (
              <div key={index} style={styles.driveCard}>
                <h3 style={styles.driveTitle}>{company}</h3>
                <p style={styles.driveDate}>
                  <strong>Date:</strong> 2023-11-15
                </p>
                <p style={styles.driveDescription}>
                  Prepare for the {company} placement drive. Topics include Data Structures, Algorithms, and System Design.
                </p>
                <button
                  style={styles.registerButton}
                  onClick={() => alert(`Register for ${company} Drive`)}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Hiring */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Companies Hiring</h2>
          <div style={styles.companiesContainer}>
            {["Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro", "Accenture"].map((company, index) => (
              <div key={index} style={styles.companyCard}>
                <h3 style={styles.companyName}>{company}</h3>
                <p style={styles.companyRole}>
                  <strong>Role:</strong> Software Engineer
                </p>
                <p style={styles.companyLocation}>
                  <strong>Location:</strong> Multiple
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internships */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Internships</h2>
          <div style={styles.internshipsContainer}>
            {["Google Summer Internship", "Microsoft Explore Internship", "Amazon SDE Internship"].map((internship, index) => (
              <div key={index} style={styles.internshipCard}>
                <h3 style={styles.internshipTitle}>{internship}</h3>
                <p style={styles.internshipDuration}>
                  <strong>Duration:</strong> 3 months
                </p>
                <p style={styles.internshipStipend}>
                  <strong>Stipend:</strong> $5,000/month
                </p>
                <button
                  style={styles.applyButton}
                  onClick={() => alert(`Apply for ${internship}`)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Aptitude Mock Tests */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Aptitude Mock Tests</h2>
          <div style={styles.testsContainer}>
            {["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability"].map((test, index) => (
              <div key={index} style={styles.testCard}>
                <h3 style={styles.testTitle}>{test}</h3>
                <p style={styles.testDescription}>
                  Practice {test} questions to improve your skills.
                </p>
                <button
                  style={styles.startButton}
                  onClick={() => alert(`Start ${test} Mock Test`)}
                >
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Practice Section */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Practice Section</h2>
          <div style={styles.practiceContainer}>
            {["Coding Problems", "Aptitude Questions", "Interview Preparation"].map((practice, index) => (
              <div key={index} style={styles.practiceCard}>
                <h3 style={styles.practiceTitle}>{practice}</h3>
                <p style={styles.practiceDescription}>
                  Practice {practice} to ace your placements.
                </p>
                <button
                  style={styles.practiceButton}
                  onClick={() => alert(`Start Practicing ${practice}`)}
                >
                  Start Practicing
                </button>
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
        <h1 style={{marginLeft:"auto"}}> Placements</h1>
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
        <p>&copy; 2023 University Forum. All rights reserved.</p>
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
  drivesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  driveCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 300px",
  },
  driveTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  driveDate: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  driveDescription: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  registerButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  companiesContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  companyCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 200px",
  },
  companyName: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  companyRole: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  companyLocation: {
    color: "#4b5563", // Tailwind's gray-600
  },
  internshipsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  internshipCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 300px",
  },
  internshipTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  internshipDuration: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "0.5rem",
  },
  internshipStipend: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  applyButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  testsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  testCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 300px",
  },
  testTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  testDescription: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  startButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  practiceContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
  },
  practiceCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    flex: "1 1 300px",
  },
  practiceTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  practiceDescription: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "1rem",
  },
  practiceButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
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

export default PlacementsPage;