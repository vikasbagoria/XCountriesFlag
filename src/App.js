import React, { useState, useEffect } from "react";
import axios from "axios";
import FlagGrid from "./FlagGrid";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://xcountries-backend.azurewebsites.net/all");
        if (Array.isArray(response.data)) {
          setCountries(response.data);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        console.error("Error fetching data:", err.message || err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="app-container">
      <h1>Country Flags</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <FlagGrid countries={countries} />}
    </div>
  );
};

export default App;
