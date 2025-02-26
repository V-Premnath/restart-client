import axios from "axios";
import { React,useState }from "react";

const LoginPage = () => {
    const backend_url = "http://192.168.103.29:8000/api/login/"
    const [formData, setFormData] = useState({
        email: "",
        password  :""
      });
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(formData);
            const response = await axios.post(backend_url, formData);
            if (response.status >= 200 && response.status < 300){
                alert("Login Successful!");
                sessionStorage.setItem("username",formData.username );
                localStorage.setItem("username",formData.username );
                sessionStorage.setItem("role",response.role);
                localStorage.setItem("role",response.role );
                
                window.location.href = "/home";
            }
        }
        catch(error){
            console.error("Error:", error);
            alert("Login Failed!");
            return;
        }
        

    }


  return (
    <div style={styles.pageContainer}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <h1 style={styles.logo}>University Forum</h1>
          {/* <ul style={styles.navLinks}>
            <li><a href="/" style={styles.navLink}>Home</a></li>
            <li><a href="/academics" style={styles.navLink}>Academics</a></li>
            <li><a href="/events" style={styles.navLink}>Events</a></li>
            <li><a href="/clubs" style={styles.navLink}>Clubs</a></li>
            <li><a href="/placements" style={styles.navLink}>Placements</a></li>
          </ul> */}
        </div>
      </nav>

      {/* Login Form */}
      <section style={styles.loginSection}>
        <div style={styles.loginContainer}>
          <h2 style={styles.loginTitle}>Welcome Back!</h2>
          <p style={styles.loginSubtitle}>Please log in to continue.</p>
          <form style={styles.loginForm} onSubmit={handleSubmit}>
            <input
              type="name"
              name="username"
              placeholder="Username"
              style={styles.inputField}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={styles.inputField}
              onChange={handleChange}
            />
            <button type="submit" style={styles.loginButton}>
              Log In
            </button>
          </form>
          <p style={styles.signupText}>
            Don't have an account? <a href="/signup" style={styles.signupLink}>Sign Up</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p>&copy; 2025 University Forum. All rights reserved.</p>
          <p style={styles.footerCredit}>Designed with ❤️ for students.</p>
        </div>
      </footer>
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
  loginSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    padding: "2rem",
  },
  loginContainer: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#1f2937", // Tailwind's gray-800
  },
  loginSubtitle: {
    color: "#4b5563", // Tailwind's gray-600
    marginBottom: "2rem",
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputField: {
    padding: "0.75rem",
    borderRadius: "0.25rem",
    border: "1px solid #e5e7eb", // Tailwind's gray-200
    fontSize: "1rem",
  },
  loginButton: {
    backgroundColor: "#3b82f6", // Tailwind's blue-600
    color: "#ffffff",
    padding: "0.75rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
  },
  signupText: {
    color: "#4b5563", // Tailwind's gray-600
    marginTop: "1rem",
  },
  signupLink: {
    color: "#3b82f6", // Tailwind's blue-600
    textDecoration: "none",
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

export default LoginPage;