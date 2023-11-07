import React from "react";
import Header from "./Header";
import Container from "./container"; // Update the import statement to use the correct case

export default function Homepage({ filteredProducts }) {
  return (
    <div className="home">
      <Header />
      <Container filteredProducts={filteredProducts} />
    </div>
  );
}