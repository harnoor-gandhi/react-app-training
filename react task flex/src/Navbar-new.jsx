import React from "react";
import { Link } from "react-router-dom";

function NavbarNew() {
	return (
		<div>
			<button>
				<Link to="/">Home</Link>
			</button>
			<button>
				<Link to="/contact">Contact</Link>
			</button>
			<button>
				<Link to="/about">About</Link>
			</button>
		</div>
	);
}

export default NavbarNew;