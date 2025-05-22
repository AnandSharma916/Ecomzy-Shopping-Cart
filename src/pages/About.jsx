import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>

      <div style={styles.content}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Powering Business Success</h1>
          <p style={styles.subtext}>
            Promopact Marketing India Pvt Ltd helps thousands of businesses thrive with powerful tools and services.
            From product discovery to reliable delivery, our all-in-one commerce platform empowers both sellers and buyers.
            <br /><br />
            At Promopact Marketing India Pvt. Ltd., we believe that online shopping should be simple, trustworthy, and rewarding. Founded with a vision to bridge the gap between quality and affordability, we’ve built a platform where customers can discover top-tier products, exclusive deals, and seamless service—all under one roof. From everyday essentials to niche collections, every item we offer is carefully curated to meet the needs of modern consumers. Our team is driven by passion, innovation, and a deep commitment to customer satisfaction. With a growing network of happy shoppers across the country, Promopact isn't just an online store—it's a community built on trust, value, and excellence. Whether you're a first-time visitor or a returning customer, we’re here to power your shopping journey with reliability and care.
          </p>
          <p style={styles.subtext}>
            Whether you're an entrepreneur, a small business, or a large brand, our solutions are designed to scale with your growth.
          </p>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <div style={styles.imageCard}>
            <img
              src="https://www.dsers.com/blog/content/images/2024/02/How-to-create-a-comprehensive-one-page-Ecommerce-website-for-client-s-convenience.png"
              alt="About Promopact"
              style={styles.image}
            />
            <div style={styles.statBox}>
              <h3 style={{ marginBottom: 5, fontWeight: 600 }}>1,70,000+ businesses</h3>
              <p style={{ color: '#555' }}>trust Promopact globally</p>
            </div>
          </div>

          {/* Thought Box */}
          <div style={styles.thoughtBox}>
            <h4 style={{ marginBottom: 10 }}>💡 Thought of the Day</h4>
            <p style={{ color: '#333', fontStyle: 'italic' }}>
              "Success doesn’t come from what you do occasionally. It comes from what you do consistently."
            </p>
            <p style={{ marginTop: 10, fontWeight: 500, color: '#007bff' }}>– Marie Forleo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundImageUrl = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1950&q=80";

const styles = {
  wrapper: {
    position: 'relative',
    backgroundImage: `url('${backgroundImageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px', // Increased top padding
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: '100vh',
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '40px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
    color: '#fff',
  },
  left: {
    flex: '1 1 500px',
  },
  right: {
    flex: '1 1 500px',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '25px',
    color: '#fff',
  },
  subtext: {
    fontSize: '16px',
    color: '#e0e0e0',
    lineHeight: '1.7',
    marginBottom: '18px',
  },
  imageCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    marginBottom: '25px',
  },
  image: {
    width: '100%',
    maxHeight: '320px',
    borderRadius: '10px',
    objectFit: 'cover',
    marginBottom: '15px',
  },
  statBox: {
    backgroundColor: '#f1f3f5',
    padding: '12px 16px',
    borderRadius: '8px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
    color: '#222',
    textAlign: 'center',
  },
  thoughtBox: {
    backgroundColor: '#fff',
    color: '#222',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
};

export default About;
