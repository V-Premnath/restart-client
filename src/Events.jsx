const EventsPage = () => {
    return (
      <div style={styles.pageContainer}>
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content */}
        <main style={styles.mainContent}>
          {/* University Events Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>University Events</h2>
            <div style={styles.eventsContainer}>
              {[
                {
                  type: "Technical",
                  events: [
                    "Hackathon 2023 - Date: 2023-11-10",
                    "Coding Competition - Date: 2023-11-15",
                  ],
                },
                {
                  type: "Non-Technical",
                  events: [
                    "Cultural Fest - Date: 2023-11-20",
                    "Sports Day - Date: 2023-11-25",
                  ],
                },
              ].map((eventCategory, index) => (
                <div key={index} style={styles.eventCategoryCard}>
                  <h3 style={styles.eventCategoryTitle}>{eventCategory.type} Events</h3>
                  <ul style={styles.eventList}>
                    {eventCategory.events.map((event, idx) => (
                      <li key={idx} style={styles.eventItem}>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
  
          {/* Workshops Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Workshops</h2>
            <div style={styles.workshopsContainer}>
              {[
                {
                  topic: "Web Development Workshop",
                  instructor: "John Doe",
                  date: "2023-11-05",
                },
                {
                  topic: "Machine Learning Workshop",
                  instructor: "Jane Smith",
                  date: "2023-11-12",
                },
              ].map((workshop, index) => (
                <div key={index} style={styles.workshopCard}>
                  <h3 style={styles.workshopTopic}>{workshop.topic}</h3>
                  <p style={styles.workshopInstructor}>
                    <strong>Instructor:</strong> {workshop.instructor}
                  </p>
                  <p style={styles.workshopDate}>
                    <strong>Date:</strong> {workshop.date}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Seminars Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Seminars</h2>
            <div style={styles.seminarsContainer}>
              {[
                {
                  topic: "Future of AI",
                  speaker: "Dr. Alan Turing",
                  time: "10:00 AM - 12:00 PM",
                  date: "2023-11-08",
                },
                {
                  topic: "Blockchain Technology",
                  speaker: "Dr. Satoshi Nakamoto",
                  time: "2:00 PM - 4:00 PM",
                  date: "2023-11-10",
                },
              ].map((seminar, index) => (
                <div key={index} style={styles.seminarCard}>
                  <h3 style={styles.seminarTopic}>{seminar.topic}</h3>
                  <p style={styles.seminarSpeaker}>
                    <strong>Speaker:</strong> {seminar.speaker}
                  </p>
                  <p style={styles.seminarTime}>
                    <strong>Time:</strong> {seminar.time}
                  </p>
                  <p style={styles.seminarDate}>
                    <strong>Date:</strong> {seminar.date}
                  </p>
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
            <li><a href="/home" style={styles.navLink}>Home</a></li>
            <li><a href="/academics" style={styles.navLink}>Academics</a></li>
            <li><a href="/events" style={styles.navLink}>Events</a></li>
            <li><a href="/clubs" style={styles.navLink}>Clubs</a></li>
            <li><a href="/placements" style={styles.navLink}>Placements</a></li>
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
    eventsContainer: {
      display: "flex",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    eventCategoryCard: {
      backgroundColor: "#ffffff",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    eventCategoryTitle: {
      fontSize: "1.25rem",
      fontWeight: "semibold",
      color: "#3b82f6", // Tailwind's blue-600
      marginBottom: "1rem",
    },
    eventList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    eventItem: {
      color: "#4b5563", // Tailwind's gray-600
      marginBottom: "0.5rem",

    },
    workshopsContainer: {
      display: "flex",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    workshopCard: {
      backgroundColor: "#ffffff",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    workshopTopic: {
      fontSize: "1.25rem",
      fontWeight: "semibold",
      color: "#3b82f6", // Tailwind's blue-600
      marginBottom: "0.5rem",
    },
    workshopInstructor: {
      color: "#4b5563", // Tailwind's gray-600
      marginBottom: "0.5rem",
    },
    workshopDate: {
      color: "#4b5563", // Tailwind's gray-600
    },
    seminarsContainer: {
      display: "flex",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    seminarCard: {
      backgroundColor: "#ffffff",
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    seminarTopic: {
      fontSize: "1.25rem",
      fontWeight: "semibold",
      color: "#3b82f6", // Tailwind's blue-600
      marginBottom: "0.5rem",
    },
    seminarSpeaker: {
      color: "#4b5563", // Tailwind's gray-600
      marginBottom: "0.5rem",
    },
    seminarTime: {
      color: "#4b5563", // Tailwind's gray-600
      marginBottom: "0.5rem",
    },
    seminarDate: {
      color: "#4b5563", // Tailwind's gray-600
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
  
  export default EventsPage;