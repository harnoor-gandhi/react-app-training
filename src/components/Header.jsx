import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ searchQuery, setSearchQuery, products, setFilteredProducts, handleSearchEnter }) {
  const loggedIn = localStorage.getItem("Userloggedin") === "true";
  const navi = useNavigate();
  const [noProductsFound, setNoProductsFound] = useState(false); // State to track if no products are found

  const handleLogout = () => {
    localStorage.setItem("Userloggedin", "false");
    navi("/");
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filtered products and noProductsFound state
    setFilteredProducts(filtered);
    setNoProductsFound(filtered.length === 0);
  };

  return (
    <div className="header">
      <div className="logo">SHOPKART</div>
      <div className="list">
        <ul>
          <li className="search_functionality">
            <input
              type="text"
              placeholder="Search Products"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  // Trigger the search when the "Enter" key is pressed
                  handleSearchEnter();
                }
              }}
            />
            {noProductsFound && (
              <p className="no-products-message">No products found</p>
            )}
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          {loggedIn ? (
            <>
              <Link to="/my-orders">
                <li>My Orders</li>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
