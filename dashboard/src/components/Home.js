import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import api from "../api/axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const initializeDashboard = async () => {
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get("token");

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "http://localhost:3000/login";
        return;
      }

      try {
        const response = await api.get("/funds");

        console.log("Funds API success:", response.data);

        setLoading(false);
      } catch (error) {
        console.error("Funds API failed:", error);

        const status = error.response?.status;
        const data = error.response?.data;

        console.log("Status:", status);
        console.log("Response:", data);

        setError(
          `Dashboard API failed. Status: ${status || "unknown"}`
        );

        setLoading(false);
      }
    };

    initializeDashboard();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "40px" }}>
        Loading InvestX...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>{error}</h2>
        <p>Open Chrome DevTools → Console to see the exact error.</p>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;