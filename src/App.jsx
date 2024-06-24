import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;