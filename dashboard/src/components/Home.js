import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import api from "../api/axios";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeDashboard = async () => {
      // Check whether login redirected us with a token
      const params = new URLSearchParams(window.location.search);
      const tokenFromUrl = params.get("token");

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);

        // Remove token from browser URL
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
        await api.get("/funds");

        setLoading(false);
      } catch (error) {
        console.error("Authentication failed:", error);

        localStorage.removeItem("token");

        window.location.href = "http://localhost:3000/login";
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

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;