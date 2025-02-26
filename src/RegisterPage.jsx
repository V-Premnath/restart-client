import React, { useState } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "student",
    password1: "",
    password2: "",
  });
  const navigate = useNavigate(); // Use the navigate hook
  const backend_url = "http://192.168.103.29:8000/api/register/"; // Ensure it's a full URL

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    // Basic validation
    if (formData.password1 !== formData.password2) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Send POST request using Axios
      const response = await axios.post(backend_url, formData);

      // Handle the response
      sessionStorage.setItem("username",formData.username );
     localStorage.setItem("username",formData.username );
     navigate("/home");

      console.log("Sign up successful:", response.data);
      alert("Sign up successful!",formData.username);
      response.redirect("/home");
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("Sign up failed. Please try again.");
    }
  };



  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id_username" style={{ display: "block", marginBottom: "5px" }}>
            Username
          </label>
          <input
            type="text"
            id="id_username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id_email" style={{ display: "block", marginBottom: "5px" }}>
            Email
          </label>
          <input
            type="email"
            id="id_email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id_role" style={{ display: "block", marginBottom: "5px" }}>
            Role
          </label>
          <select
            id="id_role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id_password1" style={{ display: "block", marginBottom: "5px" }}>
            Password
          </label>
          <input
            type="password"
            id="id_password1"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="id_password2" style={{ display: "block", marginBottom: "5px" }}>
            Confirm Password
          </label>
          <input
            type="password"
            id="id_password2"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
