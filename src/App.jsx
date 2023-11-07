import { useState } from 'react';
import './App.css';
import AllRoutes from './components/Routes';
// import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  const handleSearchEnter = () => {
  };

  return (
    <div>
      <AllRoutes
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredProducts={filteredProducts} 
        setFilteredProducts={setFilteredProducts} 
        handleSearchEnter={handleSearchEnter} 
      />
      {/* <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> */}
    </div>
  );
}

export default App;
