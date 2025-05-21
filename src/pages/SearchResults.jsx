import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Toast from "../components/Toast";
import 'react-toastify/dist/ReactToastify.css';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      setToast(`Showing results for "${searchTerm}"`);
    }
  }, [searchTerm]);

  const handleClick = () => {
    setToast(`You clicked on Search Results page!`);
  };

  return (
    <div className="p-8 min-h-screen" onClick={handleClick}>
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p>Results for: <strong>{searchTerm}</strong></p>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
};

export default SearchResults;
