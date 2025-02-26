import React, { useState, useEffect, useRef } from "react";

const backendUrl = "http://192.168.103.29:8000"; // IP of the first laptop

export const Discussions = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [comments, setComments] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const [searchComment, setSearchComment] = useState(""); // For search functionality
  const [showNewDiscussionForm, setShowNewDiscussionForm] = useState(false);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newDiscussiondescription, setNewDiscussionDescription] = useState("");
  const commentsEndRef = useRef(null); // Ref to scroll to the last comment

  // Dummy messages for testing purposes
  const dummyMessages = [
    { id: 1, sender: "John", content: "This is a test message", timestamp: "2025-02-26T11:40:00.000Z", isSelf: false },
    { id: 2, sender: "You", content: "This is a reply", timestamp: "2025-02-26T11:45:00.000Z", isSelf: true }
  ];

  const getThreads = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/threads/all`);
      const data = await response.json();
      if (response.status >= 200 && response.status < 300) {
        // Attach dummy messages to each thread (for testing purposes)
        const threadsWithMessages = data.threads.map(thread => ({
          ...thread,
          messages: dummyMessages, // Attach dummy messages
        }));
        setThreads(threadsWithMessages);

        // Select the first thread by default
        if (threadsWithMessages.length > 0) {
          setSelectedThread(threadsWithMessages[0]);
        }
      } else {
        console.error("Error fetching threads");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch comments for a thread when it is clicked
  const getComments = async (threadId) => {
    try {
      const response = await fetch(`${backendUrl}/api/comments/${threadId}/`);
      const data = await response.json();
      if (response.status >= 200 && response.status < 300) {
        setComments((prevComments) => ({
          ...prevComments,
          [threadId]: data.comments,  // Store comments by threadId
        }));
      } else {
        console.error("Error fetching comments");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle thread selection
  const handleThreadSelect = (thread) => {
    // Mark as read when selecting a thread
    const updatedThreads = threads.map(t =>
      t.id === thread.id ? { ...t, unread: 0 } : t
    );
    setThreads(updatedThreads);

    // Fetch comments only if they have not been fetched for this thread
    if (!comments[thread.id]) {
      getComments(thread.id);
    }

    setSelectedThread(thread);
  };

  // Handle sending a new message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Create the message object with username and content
    const message = {
      content: newMessage,
      username: sessionStorage.getItem("username"),  // Add the sender (username) to the message
    };

    try {
      // Send the POST request with the username included in the body
      const response = await fetch(`${backendUrl}/api/comments/${selectedThread.id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      console.log("message : ", JSON.stringify(message));

      if (response.status >= 200 && response.status < 300) {
        // After the message is successfully posted, refresh the comments
        getComments(selectedThread.id);
      } else {
        console.error("Error posting message");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setNewMessage(""); // Clear the input after sending the message
  };

  // Handle searching threads
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle searching comments
  const handleSearchComment = (e) => {
    setSearchComment(e.target.value);
  };
  // Filter threads based on search query
  const filteredThreads = threads.filter((thread) =>
    thread.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Filter comments based on search query
  const filteredComments = comments[selectedThread?.id]?.filter((comment) =>
    comment.content.toLowerCase().includes(searchComment.toLowerCase())
  );

  // Handle new discussion form visibility
  const toggleNewDiscussionForm = () => {
    setShowNewDiscussionForm(!showNewDiscussionForm);
  };

  const handleNewDiscussionSubmit = async (e) => {
    e.preventDefault();
    if (!newDiscussionTitle.trim()) return;

    const newDiscussion = {
      title: newDiscussionTitle,
      content: newDiscussiondescription,
      username: sessionStorage.getItem("username")  // Content can be added later
    };

    try {
      console.log(`${backendUrl}/api/new_thread/`);
      const response = await fetch(`${backendUrl}/api/new_thread/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDiscussion),
      });

      if (response.status >= 200 && response.status < 300) {
        // After successfully creating a new discussion, refresh the thread list
        getThreads();
        setNewDiscussionTitle(""); // Clear the input field
        setNewDiscussionDescription(""); // Clear the description field
        toggleNewDiscussionForm(); // Hide the form
      } else {
        console.error("Error creating new discussion");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (selectedThread) {
        getComments(selectedThread.id);
      }
    }, 900); // Refresh every 0.9 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [selectedThread]);

  useEffect(() => {
    getThreads();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the comments when they are updated
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments, selectedThread]); // Only trigger scroll when comments change

  return (
    <div style={styles.appContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>University Forum</h1><h2 style={{marginLeft:"auto"}}>Discussions</h2>
      </header>

      <div style={styles.chatContainer}>
        {/* Sidebar with threads */}
        <div style={styles.sidebar}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search threads"
              style={styles.searchInput}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div style={styles.threadsList}>
            {filteredThreads.map(thread => (
              <div
                key={thread.id}
                style={{
                  ...styles.threadItem,
                  backgroundColor: selectedThread?.id === thread.id ? "#2d3748" : "transparent"
                }}
                onClick={() => handleThreadSelect(thread)}
              >
                <div style={styles.threadInfo}>
                  <div style={styles.threadHeader}>
                    <span style={styles.threadName}>{thread.title}</span>
                    <span style={styles.threadTime}>{thread.created_at}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* New Discussion Button */}
          <button style={styles.newDiscussionButton} onClick={toggleNewDiscussionForm}>
            + New Discussion
          </button>
        </div>

        {/* Main chat area */}
        <div style={styles.chatArea}>
          {/* Description Section */}
          {selectedThread && (
            <div style={styles.descriptionSection}>
              <h2 style={styles.threadTitle}>{selectedThread.title}</h2>
              <p style={styles.threadDescription}>{selectedThread.content}</p>
              <input
                      type="text"
                      placeholder="Search comments"
                      style={styles.searchCommentInput}
                      value={searchComment}
                      onChange={handleSearchComment}
                    />
            </div>
          )}


          {/* Comments Section */}
          <div style={styles.commentsSection}>
          
            {comments[selectedThread?.id] && comments[selectedThread.id].length > 0 ? (
              filteredComments.map(comment => (
                <div key={comment.id} style={styles.commentItem}>
                  <div style={styles.commentContent}>
                    <p style={styles.commentBy}>{comment.commented_by}</p>
                    <p>{comment.content}</p>
                  </div>
                  <div style={styles.commentTime}>{comment.commented_at}</div>
                </div>
              ))
            ) : (
              <p style={{ color: "#a0aec0" }}>No comments yet.</p>
            )}
            <div ref={commentsEndRef} /> {/* This div will be used for scrolling */}
          </div>

          {/* Message input */}
          <form style={styles.inputContainer} onSubmit={handleSendMessage}>
            
            <input
              type="text"
              placeholder="Type a message"
              style={styles.messageInput}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit" style={styles.sendButton}>
              {newMessage.trim() ? "➤" : "➥"}
            </button>
          </form>
        </div>
      </div>

      {/* New Discussion Form Modal */}
      {showNewDiscussionForm && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContainer}>
            <h2 style={styles.modalTitle}>New Discussion</h2>
            <form onSubmit={handleNewDiscussionSubmit}>
              <input
                type="text"
                placeholder="Enter discussion title"
                style={styles.modalInput}
                value={newDiscussionTitle}
                onChange={(e) => setNewDiscussionTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter description"
                style={styles.modalInput}
                value={newDiscussiondescription}
                onChange={(e) => setNewDiscussionDescription(e.target.value)}
              />
              <button type="submit" style={styles.submitButton}>Create Discussion</button>
              <button type="reset" style={styles.cancelButton} onClick={toggleNewDiscussionForm}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#2772A0", // Darker background
    fontFamily: "'Inter', sans-serif",
    color: "#ffffff",
  },
  header: {
    backgroundColor: "#174E4F", // Darker header
    padding: "16px",
    display:"flex",
    flexDirection:"row",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderBottom: "2px solid #CCDDEA", // Lighter border
  },
  headerTitle: {
    margin: 0,
    fontSize: "27px",
    fontWeight: 600,
    alignItems:"center",
    marginTop: "21px",
    color: "#CCDDEA", // Lighter text for header
  },
  chatContainer: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  sidebar: {
    width: "25%",
    minWidth: "250px",
    backgroundColor: "#2772A0", // Dark sidebar
    borderRight: "1px solid #CCDDEA", // Lighter border
    position: "relative",
  },
  searchContainer: {
    padding: "12px 3px 3px 3px",
    borderBottom: "1px solid #CCDDEA", // Lighter border
  },
  searchInput: {
    width: "90%",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#CCDDEA", // Lighter background
    color: "#2772A0", // Dark text
    fontSize: "14px",
    outline: "none",
  },
  searchCommentInput: {
    width: "30%",
    padding: "12px 12px",
    display: "flex",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#CCDDEA", // Lighter background
    color: "#2772A0", // Dark text
    fontSize: "14px",
    outline: "none",
    justifyContent: "end",
    marginLeft: "auto",
    marginBottom: "7px"
  },
  threadsList: {
    overflowY: "auto",
    flex: 1,
  },
  threadItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "#CCDDEA", // Lighter hover effect
    },
  },
  threadInfo: {
    flex: 1,
  },
  threadHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4px",
  },
  threadName: {
    fontWeight: 500,
    fontSize: "14px",
    color: "#FFFFFF", // White text for thread names
  },
  threadTime: {
    fontSize: "12px",
    color: "#CCDDEA", // Lighter text for time
  },
  newDiscussionButton: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    backgroundColor: "#2772A0", // Primary button color
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  chatArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#2772A0", // Dark area for chat
  },
  descriptionSection: {
    padding: "16px",
    backgroundColor: "#2772A0", // Dark section
    borderBottom: "1px solid #CCDDEA", // Lighter border
  },
  threadTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#CCDDEA", // Lighter title text
  },
  threadDescription: {
    fontSize: "14px",
    color: "#CCDDEA", // Lighter description text
    marginTop: "8px",
  },
  commentsSection: {
    padding: "16px",
    backgroundColor: "#2772A0", // Dark background
    borderBottom: "1px solid #CCDDEA", // Lighter border
    overflowY: "auto",
    flex: 1,
  },
  commentItem: {
    padding: "8px",
    backgroundColor: "#CCDDEA", // Light background for comments
    borderRadius: "8px",
    marginBottom: "8px",
  },
  commentContent: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#2772A0", // Dark text for comment content
  },
  commentTime: {
    fontSize: "12px",
    color: "#CCDDEA", // Lighter time text
    textAlign: "right",
    marginTop: "4px",
  },
  commentBy: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#2772A0", // Dark color for comment author's name
    textAlign: "left",
    marginTop: "4px",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#2772A0", // Dark background
    borderTop: "1px solid #CCDDEA", // Lighter border
  },
  messageInput: {
    flex: 1,
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#CCDDEA", // Lighter background for message input
    color: "#2772A0", // Dark text
    fontSize: "14px",
    outline: "none",
  },
  sendButton: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#2772A0", // Send button color
    color: "#ffffff",
    fontSize: "16px",
    marginLeft: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#2772A0", // Dark modal background
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "18px",
    color: "#CCDDEA", // Lighter modal title text
    marginBottom: "16px",
  },
  modalInput: {
    width: "100%",
    padding: "8px",
    marginBottom: "16px",
    borderRadius: "8px",
    border: "1px solid #CCDDEA", // Lighter border for inputs
    backgroundColor: "#CCDDEA", // Lighter background for modal inputs
    color: "#2772A0", // Dark text
  },
  submitButton: {
    backgroundColor: "#2772A0", // Primary button color
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#CCDDEA", // Lighter cancel button
    color: "#2772A0", // Dark text for cancel button
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    marginLeft: "8px",
  },
};

export default Discussions;