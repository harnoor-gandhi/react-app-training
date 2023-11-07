import React, { useContext } from "react";
import { productContext } from "./Routes";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const context = useContext(productContext);
    const navigate = useNavigate();

    const increaseQuantity = (product) => {
        context.increaseQuantity(product);
    };

    const decreaseQuantity = (product) => {
        context.decreaseQuantity(product);
    };

    const removeFromCart = (product) => {
        context.removeFromCart(product);
    };

    const calculateTotalBill = () => {
        const total = context.addedProducts.reduce((acc, product) => {
            if (!isNaN(product.quantity)) {
                return acc + product.price * product.quantity;
            }
            return acc;
        }, 0);
        return total;
    };

    const handleCheckout = () => {
        const orderDetails = {
            products: context.addedProducts,
            totalBill: calculateTotalBill(),
            timestamp: new Date().toLocaleString(),
        };

        // Save the order details in local storage
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(orderDetails);
        localStorage.setItem("orders", JSON.stringify(orders));

        // After successful checkout, navigate to the MyOrders page.
        navigate("/my-orders");
    };

    return (
        <div className="cart-container">
            <h1 style={{ color: "black",  textAlign:'center' }}>Cart</h1>
            {context.addedProducts.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {context.addedProducts.map((product, index) => (
                            <div className="cart-item" key={index}>
                                <div>
                                    <img src={product.image} alt="productimg" className="cart-image" />
                                </div>
                                <div className="cart-details">
                                    <h2>{product.title}</h2>
                                    <p>Price: ${product.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(product)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => increaseQuantity(product)}>+</button>
                                    </div>
                                    <p>Total Price: ${product.price * product.quantity}</p>
                                    <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="checkout">
                        <p>Total Bill: ${calculateTotalBill()}</p>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}
