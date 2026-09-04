import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Summary = () => {
  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await api.get("/dashboard/summary");
        setSummary(response.data);
      } catch (error) {
        console.error(error);

        setError(
          error.response?.data?.error ||
          "Unable to load dashboard summary."
        );
      }
    };

    fetchSummary();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!summary) {
    return <p>Loading summary...</p>;
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {summary.name}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>
              ₹{summary.availableMargin.toFixed(2)}
            </h3>

            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used{" "}
              <span>
                ₹{summary.availableMargin === undefined
                  ? "0.00"
                  : (
                      summary.availableMargin -
                      summary.availableCash
                    ).toFixed(2)}
              </span>
            </p>

            <p>
              Opening balance{" "}
              <span>
                ₹{summary.availableCash.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹{summary.profitLoss.toFixed(2)}
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value{" "}
              <span>
                ₹{summary.currentValue.toFixed(2)}
              </span>
            </p>

            <p>
              Investment{" "}
              <span>
                ₹{summary.totalInvestment.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;