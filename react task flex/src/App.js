import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarNew from "./Navbar-new";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import About from "./pages/About";

function App() {
	return (
		<div>
			<NavbarNew />
			
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
				</Routes>
		
		</div>
	);
}

export default App;