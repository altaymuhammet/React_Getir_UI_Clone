import React, { useState, useEffect } from "react";

import Title from "./ui/Title";
import Products from "api/products.json";
import Product from './ui/Product';

const Favourites = () => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <Title>Favoriler</Title>
        <div className="grid grid-cols-8 gap-4 rounded-lg overflow-hidden p-3">
          {!products.length && <p>Yükleniyor...</p>}
          {products.length && products.map((product, index) => <Product key={index} product={product} /> )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
