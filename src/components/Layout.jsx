import React from "react";
import Header from "./Header"; // Import your Header component

function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;
