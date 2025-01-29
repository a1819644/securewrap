import React from "react";
import "../assets/ProductCategories.css";
import ProductCategoriesCard from "./ProductCategoriesCard";
import Partners from "./Partners";
const ProductCategories = () => {
  return (
    <div className="container text-center">
      <div className="col">
        <h1>Product Catogeries</h1>
        <div className="row product-categories-link">
          <div className="col">
            <a href="#">TissuePaper</a>
          </div>
          <div className="col">
            <a href="#">MailingBoxes</a>
          </div>
          <div className="col">
            <a href="#">ZipLockBags</a>
          </div>
          <div className="col">
            <a href="#">MailingSatchels</a>
          </div>
          <div className="col">
            <a href="#">BubbleWrap</a>
          </div>
        </div>
        <div className="row product-categories-card g-0">
          <ProductCategoriesCard />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
