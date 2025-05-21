import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Toast from "../components/Toast"; // Ensure this exists

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [toast, setToast] = useState(null);

  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setProducts([]);
      setToast("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const handleClick = () => {
    setToast("You clicked on Home page!");
  };

  return (
    <div onClick={handleClick} style={{ minHeight: "100vh", padding: "16px", maxWidth: "1280px", margin: "auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Home Page</h1>

      {loading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", color: "red" }}>No Products Found</div>
      )}

      {/* Toast Notification */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Green Call-to-Action Section */}
      <div style={{
        backgroundColor: "#7BE495",
        textAlign: "center",
        padding: "60px 20px",
        marginTop: "60px"
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>SELL ANYWHERE WITH SHOPIFY</h2>
        <p style={{ fontSize: "16px", marginBottom: "20px", maxWidth: "600px", margin: "0 auto 20px" }}>
          Learn on the go. Try Shopify for free, and explore all the tools you need to start, run, and grow your business.
        </p>
        <button style={{
          padding: "10px 24px",
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Start free trial
        </button>
        <p style={{ fontSize: "14px", marginTop: "12px" }}>
          Try Shopify free for two weeks and explore what you can build.
        </p>
      </div>

    
    </div>
  );
};

export default Home;
