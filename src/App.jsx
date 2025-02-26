
import React, { useState,useRef,useEffect } from "react";
import ProfilePage from "./ProfilePage";
import axios from "axios";

const backendUrl = "http://192.168.103.29:8000";  // IP of the first laptop

const handleLogout = async () => {
  try {
    // Send a POST request to the /logout endpoint
    const response = await axios.post(`http://${backendUrl}/logout`, {}, {
      withCredentials: true, // if you are using cookies
    });

    if (response.status === 200) {
      // Clear session or local storage, if needed
      sessionStorage.removeItem('username');
      localStorage.removeItem('username');
      sessionStorage.removeItem('role');
      localStorage.removeItem('role');
      
      // Redirect to login or home page
      window.location.href = '/login';
    }
  } catch (error) {
    console.error("Error during logout:", error);
    alert("Logout failed! Please try again.");
  }
};

const App = () => {

  
// Example fetch call:
// fetch(`${backendUrl}/api/login`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));
  return (
    
    <div style={styles.appContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Call-to-Action Section */}
        <CallToActionSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Chatbot Integration Space */}
      <ChatbotButton />
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        {/* Logo */}
        <h1 style={styles.logo}>University Forum</h1>

        {/* Navigation Links */}
        <ul style={styles.navLinks}>
          <li><a href="/academics" style={styles.navLink}>Academics</a></li>
          <li><a href="https://teamkrypton.pythonanywhere.com/" style={styles.navLink}>Events</a></li>
          <li><a href="/clubs" style={styles.navLink}>Clubs</a></li>
          <li><a href="/placements" style={styles.navLink}>Placements</a></li>
          <li><a href="/discussions" style={styles.navLink}>Discussions</a></li>
          <li><a href="/announcements" style={styles.navLink}>Announcements</a></li>
          
        </ul>
        

        {/* User Actions */}
        <div >
        {/* <ProfilePage /> */}
        <button type="reset" onClick={handleLogout}></button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <h2 style={styles.heroTitle}>Welcome to the University Discussion Forum</h2>
      <p style={styles.heroDescription}>
        Join the conversation on academics, events, clubs, placements, and more. Connect with peers, share knowledge, and stay updated!
      </p>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    { title: "Academics", description: "Discuss courses, assignments, and exams with fellow students." },
    { title: "Events", description: "Stay updated on university events, workshops, and seminars." },
    { title: "Placements", description: "Get insights and tips on campus placements and internships." }
  ];

  return (
    <section style={styles.featuresSection}>
      {features.map((feature, index) => (
        <div key={index} style={styles.featureCard}>
          <h3 style={styles.featureTitle}>{feature.title}</h3>
          <p style={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

// Call-to-Action Section Component
const CallToActionSection = () => {
  return (
    <section style={styles.ctaSection}>
      <h3 style={styles.ctaTitle}>Join the Community Today!</h3>
      <p style={styles.ctaDescription}>
        Be part of a vibrant community of students and alumni.
      </p>
      <button style={styles.ctaButton}>Sign Up Now</button>
    </section>
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



const ChatbotButton = () => {
  const [toggle, setToggle] = useState(false);
  const chatbotRef = useRef(null); // Reference to the chatbot container
  const buttonRef = useRef(null); // Reference to the chatbot button

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the chatbot container or button
      if (chatbotRef.current && !chatbotRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setToggle(false); // Close the chatbot
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const styles = {
    chatbotContainer: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      width: "400px", // Adjust as needed
      height: "600px", // Adjust as needed
      zIndex: 1000, // Ensures it stays above other elements
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      display: toggle ? "block" : "none", // Control visibility
    },
    iframeStyle: {
      width: "100%",
      height: "100%",
      border: "none",
    },
    chatbotButton: {
      position: "fixed",
      bottom: "1rem",
      right: "1rem",
      backgroundColor: "#3b82f6", // Tailwind's blue-600
      color: "#ffffff",
      padding: "1rem",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
      zIndex: 1100, // Ensure the button stays above other elements
    },
  };

  return (
    <div>
      {/* Chatbot iframe */}
      <div ref={chatbotRef} style={styles.chatbotContainer}>
        {toggle && (
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/ApJ7TEtmhsCuT0kdZ0mZX"
            style={styles.iframeStyle}
          ></iframe>
        )}
      </div>

      {/* Chatbot Button */}
      <button ref={buttonRef} style={styles.chatbotButton} onClick={handleToggle}>
        {toggle ? "Close Chat" : "Chatbot"}
      </button>
    </div>
  );
};



// Inline Styles
const styles = {
  appContainer: {
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
  navLinkHover: {
    color: "#3b82f6", // Tailwind's blue-600
  },
  userActions: {
    display: "flex",
    gap: "1.5rem",
  },
  loginButton: {
    color: "#4b5563", // Tailwind's gray-700
    background: "none",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  signUpButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  mainContent: {
    flexGrow: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1.5rem",
    paddingTop: "5rem", // To account for the fixed navbar
  },
  heroSection: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  heroTitle: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    color: "#1f2937", // Tailwind's gray-800
    marginBottom: "1rem",
  },
  heroDescription: {
    color: "#4b5563", // Tailwind's gray-600
    maxWidth: "42rem",
    margin: "0 auto",
  },
  featuresSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  featureTitle: {
    fontSize: "1.25rem",
    fontWeight: "semibold",
    color: "#3b82f6", // Tailwind's blue-600
    marginBottom: "0.5rem",
  },
  featureDescription: {
    color: "#4b5563", // Tailwind's gray-600
  },
  ctaSection: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "3rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginBottom: "4rem",
  },
  ctaTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  ctaDescription: {
    fontSize: "1.125rem",
    marginBottom: "1.5rem",
  },
  ctaButton: {
    backgroundColor: "#ffffff",
    color: "#3b82f6", // Tailwind's blue-600
    padding: "0.5rem 1.5rem",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    fontWeight: "semibold",
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

export default App;