import React, { useEffect, useState } from "react";

import api from "../api/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <h3 className="title">Loading orders...</h3>;
  }

  if (error) {
    return <h3 className="title">{error}</h3>;
  }

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price / Share</th>
                <th>Total</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => {
                const total =
                  Number(order.qty) * Number(order.price);

                return (
                  <tr key={order.id}>
                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>
                      ₹{Number(order.price).toFixed(2)}
                    </td>

                    <td>
                      ₹{total.toFixed(2)}
                    </td>

                    <td>{order.mode}</td>

                    <td>
                      {order.createdAt
                        ? new Date(
                            order.createdAt
                          ).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Orders;