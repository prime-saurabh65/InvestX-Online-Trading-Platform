import React, { useContext, useState } from "react";

import GeneralContext from "./GeneralContext";
import api from "../api/axios";

import { watchlist } from "../data/data";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const selectedStock = watchlist.find(
    (stock) => stock.name === uid
  );

  const [stockQuantity, setStockQuantity] = useState(1);

  const [stockPrice, setStockPrice] = useState(
    selectedStock ? selectedStock.price : 0
  );

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (qty < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    if (price <= 0) {
      alert("Invalid stock price");
      return;
    }

    try {
      const response = await api.post("/orders", {
        name: uid,
        qty: qty,
        price: price,
        mode: "BUY",
      });

      console.log("BUY ORDER SUCCESS:", response.data);

      alert("Buy order placed successfully");

      closeBuyWindow();
    } catch (error) {
      console.error("BUY ORDER FAILED:", error);
      console.error("Backend response:", error.response?.data);

      alert(
        error.response?.data?.error ||
          "Failed to place buy order"
      );
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const marginRequired =
    Number(stockQuantity) * Number(stockPrice);

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              value={stockPrice}
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
            />
          </fieldset>

        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹{marginRequired.toFixed(2)}
        </span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;