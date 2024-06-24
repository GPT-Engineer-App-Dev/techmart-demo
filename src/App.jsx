import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import ProductListing from "./pages/ProductListing.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<ProductListing searchTerm={searchTerm} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
