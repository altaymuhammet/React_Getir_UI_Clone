import React, { useState, useEffect } from "react";

import Title from './ui/Title';
import categoryData from "api/categories.json";
import Category from "./ui/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // const categories = await fetch('../api/categories.json');
      // const response = await categories.json();
      // console.log(response)
      setCategories(categoryData);
    };

    getData();
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 2xl:grid-cols-12 ">
          {!categories.length && <p>Yükleniyor...</p>}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
