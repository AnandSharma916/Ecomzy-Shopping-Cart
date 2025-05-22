import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.overlay}></div>

      <div style={styles.centerContent}>
        <div style={styles.container}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            <h2 style={styles.mainHeading}>📞 Request a Call</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                style={styles.textarea}
              />
              <button type="submit" style={styles.submitBtn}>Submit</button>
            </form>

            <div style={styles.branchInfo}>
              <h3 style={styles.subHeading}>🏢 Delhi Branch</h3>
              <p>NSP Complex, New Delhi, India</p>
              <p>📞 +91-9876543210</p>
              <p>✉️ delhi@promopact.com</p>
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            <h2 style={styles.mainHeading}>💡 How else can we help?</h2>

            <div style={styles.card}>
              <h4 style={styles.cardTitle}>📞 Talk to Sales</h4>
              <p>Have product or pricing questions?</p>
              <p><strong>+91-9876543210</strong></p>
            </div>

            <div style={styles.card}>
              <h4 style={styles.cardTitle}>💬 Chat with Us</h4>
              <p>Get instant help with our virtual assistant</p>
              <button style={styles.chatBtn}>Start Chat</button>
            </div>

            <div style={styles.card}>
              <h4 style={styles.cardTitle}>📧 Email Support</h4>
              <p>Order or account-related issues?</p>
              <p><strong>support@promopact.com</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1950&q=80";

const styles = {
  pageWrapper: {
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  },
  centerContent: {
    width: "100%",
    maxWidth: "1300px",
    position: "relative",
    zIndex: 1,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  leftColumn: {
    flex: "1 1 500px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(8px)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
  },
  rightColumn: {
    flex: "1 1 300px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(8px)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
  },
  mainHeading: {
    marginBottom: "20px",
    color: "#1f2937",
    fontSize: "24px",
    fontWeight: "600",
  },
  subHeading: {
    color: "#374151",
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
    resize: "vertical",
  },
  submitBtn: {
    padding: "14px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  branchInfo: {
    marginTop: "30px",
    lineHeight: "1.6",
    color: "#555",
  },
  card: {
    backgroundColor: "#ffffffd9",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#333",
  },
  chatBtn: {
    marginTop: "10px",
    padding: "10px 16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default ContactPage;
