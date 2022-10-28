import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../../others/Cart/Cart";
import CartSummary from "../../others/CartSummary/CartSummary";

const Category = () => {
  const allCategory = useLoaderData();
  // console.log(allCategory);

  return (
    <div>
      <h1>category {allCategory.length}</h1>
      <div className="">
        <div className="">
          <div className="">
            {allCategory.map((category) => (
              <CartSummary key={category._id} category={category}></CartSummary>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
