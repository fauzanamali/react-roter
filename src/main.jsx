import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Customer from "./Customer.jsx";
import Sellers from "./Sellers.jsx";
import DataLayout from "./DataLayout.jsx";
import ProductDetail from "./ProductDetail.jsx";
import ProductSearch from "./ProductSearch.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/data" element={<DataLayout />}>
          
          <Route path="products/search" element={<ProductSearch />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id/detail/:cetail" element={<ProductDetail />} />
          <Route path="images/*" element={<Image />} />
          <Route path="customers" element={<Customer />} />
          <Route path="sellers" element={<Sellers />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
