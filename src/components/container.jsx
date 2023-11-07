// // import React, { useContext, useEffect, useState } from "react";
// // import { productContext } from "./Routes";

// // function Container1() {
// //   const context = useContext(productContext);
// //   const [products, setProducts] = useState([]);
// //   const [clickedProduct, setClickedProduct] = useState({});
// //   const [searchQuery, setSearchQuery] = useState(""); // State for the search query
// //   const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products



// //   const addtoCart = (product) => {
// //     setClickedProduct(product);
// //   };

// //   useEffect(() => {
// //     const apiUrl = "https://fakestoreapi.com/products";
// //     fetch(apiUrl)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setProducts(data);
// //       });
// //   }, []);

// //   useEffect(() => {
// //     if (Object.keys(clickedProduct).length !== 0) {
// //       context.setAddedProducts([...context.addedProducts, clickedProduct]);
// //       setClickedProduct({}); // Reset clickedProduct after adding it to the cart
// //     }
// //   }, [clickedProduct]);

// //   // Update filteredProducts when searchQuery changes
// //   useEffect(() => {
// //     const filtered = products.filter((product) =>
// //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     setFilteredProducts(filtered);
// //   }, [searchQuery, products]);

// //   return (
// //     <div className="container1">
// //       <input
// //         type="text"
// //         placeholder="Search Products"
// //         value={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //       />
// //       <div className="product-list">
// //         {filteredProducts.map((product, index) => (
// //           <div className="product-card" key={product.id}>
// //             <div className="prodimg">
// //               <img src={product.image} alt="productimg" className="image" />
// //             </div>
// //             <div className="price">
// //               <h2>{product.title}</h2>
// //               <p>Price: ${product.price}</p>
// //               <p>Description: ${product.description}</p>

// //               <button
// //                 className="addtocartbutton"
// //                 onClick={() => addtoCart(product)}
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Container1;


// import React, { useContext, useEffect, useState } from "react";
// import { productContext } from "./Routes";

// function Container1() {
//   const context = useContext(productContext);
//   const [products, setProducts] = useState([]);
//   const [clickedProduct, setClickedProduct] = useState({});
//   const [searchQuery, setSearchQuery] = useState(""); // State for the search query
//   const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

//   const addtoCart = (product) => {
//     setClickedProduct(product);
//   };

//   useEffect(() => {
//     const apiUrl = "https://fakestoreapi.com/products";
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//       });
//   }, []);

//   useEffect(() => {
//     if (Object.keys(clickedProduct).length !== 0) {
//       context.setAddedProducts([...context.addedProducts, clickedProduct]);
//       setClickedProduct({}); // Reset clickedProduct after adding it to the cart
//     }
//   }, [clickedProduct]);

//   // Update filteredProducts when searchQuery changes
//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   return (
//     <div className="container1">
//       <input
//         type="text"
//         placeholder="Search Products by Name" // Updated placeholder text
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <div className="product-list">
//         {filteredProducts.map((product, index) => (
//           <div className="product-card" key={product.id}>
//             <div className="prodimg">
//               <img src={product.image} alt="productimg" className="image" />
//             </div>
//             <div className="price">
//               <h2>{product.title}</h2>
//               <p>Price: ${product.price}</p>
//               <p>Description: {product.description}</p> {/* Updated description rendering */}
//               <button
//                 className="addtocartbutton"
//                 onClick={() => addtoCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Container1;



import React, { useContext, useEffect, useState } from "react";
import { productContext } from "./Routes";

function Container1() {
  const context = useContext(productContext);
  const [products, setProducts] = useState([]);
  const [clickedProduct, setClickedProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

  const addtoCart = (product) => {
    setClickedProduct(product);
  };

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(clickedProduct).length !== 0) {
      context.setAddedProducts([...context.addedProducts, clickedProduct]);
      setClickedProduct({}); // Reset clickedProduct after adding it to the cart
    }
  }, [clickedProduct]);

  // Update filteredProducts when searchQuery changes
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);
  function truncateDescription(description, charLimit) {
    if (description.length > charLimit) {
      return description.slice(0, charLimit) + '...';
    }
    return description;
  }

  return (
    <div className="container1">
      <input
        type="text"
        placeholder="Search Products by Name" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginTop: "100px" }}
      />
      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={product.id}>
            <div className="prodimg">
              <img src={product.image} alt="productimg" className="image" />
            </div>
            <div className="price">
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Description: {truncateDescription(product.description, 200)}</p>

              <p>Rating: {product.rating.rate}</p>
              <button className="addtocartbutton" onClick={() => addtoCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container1;
