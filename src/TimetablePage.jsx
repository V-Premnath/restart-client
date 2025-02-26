import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const TimetablePage = ({ isFaculty }) => {
  // State for classes
  const [classes, setClasses] = useState([
    { id: 1, name: "Algorithms", day: "Monday", time: "9:00 AM - 10:30 AM", location: "Room 101" },
    { id: 2, name: "Database Systems", day: "Tuesday", time: "11:00 AM - 12:30 PM", location: "Room 202" },
    { id: 3, name: "Machine Learning", day: "Wednesday", time: "2:00 PM - 3:30 PM", location: "Room 303" },
  ]);

  // State for exams
  const [exams, setExams] = useState([
    { id: 1, name: "Algorithms Midterm", date: "2023-11-15", time: "9:00 AM - 11:00 AM", location: "Room 101" },
    { id: 2, name: "Database Systems Final", date: "2023-12-10", time: "1:00 PM - 3:00 PM", location: "Room 202" },
  ]);

  // State for events
  const [events, setEvents] = useState([
    { id: 1, name: "Hackathon Kickoff", date: "2023-11-20", time: "6:00 PM - 8:00 PM", location: "Auditorium", rsvp: false },
    { id: 2, name: "Career Fair", date: "2023-12-05", time: "10:00 AM - 4:00 PM", location: "Main Hall", rsvp: false },
  ]);

  // State for new class input
  const [newClass, setNewClass] = useState({
    name: "",
    day: "Monday",
    time: "",
    location: "",
  });

  // State for new exam input
  const [newExam, setNewExam] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
  });

  // Handle RSVP for events
  const handleRSVP = (eventId) => {
    const updatedEvents = events.map(event =>
      event.id === eventId ? { ...event, rsvp: !event.rsvp } : event
    );
    setEvents(updatedEvents);
  };

  // Handle setting reminders for exams
  const handleSetReminder = (examId) => {
    alert(`Reminder set for exam with ID: ${examId}`);
  };

  // Handle adding a new class
  const handleAddClass = (e) => {
    e.preventDefault();
    if (!newClass.name || !newClass.time || !newClass.location) return;

    const newClassEntry = {
      id: Date.now(),
      name: newClass.name,
      day: newClass.day,
      time: newClass.time,
      location: newClass.location,
    };

    setClasses([...classes, newClassEntry]);
    setNewClass({ name: "", day: "Monday", time: "", location: "" }); // Reset form
  };

  // Handle adding a new exam
  const handleAddExam = (e) => {
    e.preventDefault();
    if (!newExam.name || !newExam.date || !newExam.time || !newExam.location) return;

    const newExamEntry = {
      id: Date.now(),
      name: newExam.name,
      date: newExam.date,
      time: newExam.time,
      location: newExam.location,
    };

    setExams([...exams, newExamEntry]);
    setNewExam({ name: "", date: "", time: "", location: "" }); // Reset form
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Student Timetables & Scheduling</h1>
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Class Timetable */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Class Schedule</h2>
          {/* Add Class Form (Visible only to Faculty) */}
          {isFaculty && (
            <form onSubmit={handleAddClass} style={styles.form}>
              <input
                type="text"
                placeholder="Class Name"
                value={newClass.name}
                onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                style={styles.input}
                required
              />
              <select
                value={newClass.day}
                onChange={(e) => setNewClass({ ...newClass, day: e.target.value })}
                style={styles.input}
                required
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
              <input
                type="text"
                placeholder="Time (e.g., 9:00 AM - 10:30 AM)"
                value={newClass.time}
                onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newClass.location}
                onChange={(e) => setNewClass({ ...newClass, location: e.target.value })}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.addButton}>
                Add Class
              </button>
            </form>
          )}
          {/* Class Timetable */}
          <div style={styles.timetable}>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(day => (
              <div key={day} style={styles.dayColumn}>
                <h3 style={styles.dayHeader}>{day}</h3>
                {classes
                  .filter(cls => cls.day === day)
                  .map(cls => (
                    <div key={cls.id} style={styles.classCard}>
                      <h4 style={styles.className}>{cls.name}</h4>
                      <p style={styles.classTime}>{cls.time}</p>
                      <p style={styles.classLocation}>{cls.location}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>

        {/* Exam Tracking */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Upcoming Exams</h2>
          {/* Add Exam Form (Visible only to Faculty) */}
          {isFaculty && (
            <form onSubmit={handleAddExam} style={styles.form}>
              <input
                type="text"
                placeholder="Exam Name"
                value={newExam.name}
                onChange={(e) => setNewExam({ ...newExam, name: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="date"
                value={newExam.date}
                onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Time (e.g., 9:00 AM - 11:00 AM)"
                value={newExam.time}
                onChange={(e) => setNewExam({ ...newExam, time: e.target.value })}
                style={styles.input}
                required
              />
              <input
                type="text"
                placeholder="Location"
                value={newExam.location}
                onChange={(e) => setNewExam({ ...newExam, location: e.target.value })}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.addButton}>
                Add Exam
              </button>
            </form>
          )}
          {/* Exam List */}
          <div style={styles.examList}>
            {exams.map(exam => (
              <div key={exam.id} style={styles.examCard}>
                <h4 style={styles.examName}>{exam.name}</h4>
                <p style={styles.examDate}>{exam.date} | {exam.time}</p>
                <p style={styles.examLocation}>{exam.location}</p>
                {isFaculty && (
                  <button
                    style={styles.reminderButton}
                    onClick={() => handleSetReminder(exam.id)}
                  >
                    Set Reminder
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Event Calendar */}
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>University Events</h2>
          <div style={styles.eventList}>
            {events.map(event => (
              <div key={event.id} style={styles.eventCard}>
                <h4 style={styles.eventName}>{event.name}</h4>
                <p style={styles.eventDate}>{event.date} | {event.time}</p>
                <p style={styles.eventLocation}>{event.location}</p>
                <button
                  style={{
                    ...styles.rsvpButton,
                    backgroundColor: event.rsvp ? "#3182ce" : "#4a5568",
                  }}
                  onClick={() => handleRSVP(event.id)}
                >
                  {event.rsvp ? "RSVPed ✅" : "RSVP"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Prop Validation
TimetablePage.propTypes = {
  isFaculty: PropTypes.bool.isRequired, // Validate isFaculty as a required boolean
};

// Inline Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#ffffff", // White background
    color: "#2d3748", // Dark text
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    backgroundColor: "#3182ce", // Blue header
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#ffffff", // White text
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 600,
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  section: {
    marginBottom: "32px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 500,
    marginBottom: "16px",
    color: "#3182ce", // Blue text
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "16px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #cbd5e0",
    backgroundColor: "#ffffff",
    color: "#2d3748",
    fontSize: "14px",
    outline: "none",
  },
  addButton: {
    backgroundColor: "#3182ce",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "8px",
    fontSize: "14px",
    cursor: "pointer",
  },
  timetable: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
  },
  dayColumn: {
    flex: 1,
    minWidth: "200px",
    backgroundColor: "#edf2f7",
    borderRadius: "8px",
    padding: "12px",
  },
  dayHeader: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "12px",
    color: "#3182ce", // Blue text
  },
  classCard: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "8px",
    border: "1px solid #cbd5e0",
  },
  className: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
  classTime: {
    margin: "4px 0",
    fontSize: "12px",
    color: "#4a5568",
  },
  classLocation: {
    margin: 0,
    fontSize: "12px",
    color: "#4a5568",
  },
  examList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  examCard: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "12px",
    border: "1px solid #cbd5e0",
  },
  examName: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
  examDate: {
    margin: "4px 0",
    fontSize: "12px",
    color: "#4a5568",
  },
  examLocation: {
    margin: 0,
    fontSize: "12px",
    color: "#4a5568",
  },
  reminderButton: {
    backgroundColor: "#3182ce",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    fontSize: "12px",
    cursor: "pointer",
    marginTop: "8px",
  },
  eventList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  eventCard: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "12px",
    border: "1px solid #cbd5e0",
  },
  eventName: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500,
  },
  eventDate: {
    margin: "4px 0",
    fontSize: "12px",
    color: "#4a5568",
  },
  eventLocation: {
    margin: 0,
    fontSize: "12px",
    color: "#4a5568",
  },
  rsvpButton: {
    backgroundColor: "#4a5568",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    fontSize: "12px",
    cursor: "pointer",
    marginTop: "8px",
    transition: "background-color 0.2s",
  },
};

export default TimetablePage;