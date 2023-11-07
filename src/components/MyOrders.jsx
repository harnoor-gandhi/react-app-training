import React, { useEffect, useState } from "react";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Retrieve order details from local storage
        const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div className="my-orders-container">
            <h2 className="my-orders-heading">My Orders</h2>
            {orders.length === 0 ? (
                <p className="no-orders-message">No orders to display.</p>
            ) : (
                <div className="orders-list">
                    {orders.map((order, index) => (
                        <div className="order-card" key={index}>
                            <div className="order-header">
                                <h3 className="order-number">Order #{index + 1}</h3>
                                <p className="order-timestamp">Timestamp: {order.timestamp}</p>
                            </div>
                            <p className="order-total-bill">Total Bill: ${order.totalBill}</p>
                            <ul className="order-products-list">
                                {order.products.map((product, productIndex) => (
                                    <li className="order-product" key={productIndex}>
                                        <p className="product-title">{product.title}</p>
                                        <p className="product-quantity">Quantity: {product.quantity}</p>
                                        <p className="product-price">Price: ${product.price}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyOrders;
