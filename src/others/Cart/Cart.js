import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = ({ content }) => {
  const {
    _id,
    details,
    image_url,
    title,
  } = content;
  //   console.log(title);
  return (
    <>
      <div className="">
        <div className="flex">
          <div className="width shadow-lg p-3 mb-5 bg-body rounded">
            <img
              className="w-100"
              style={{ height: "250px" }}
              src={image_url}
              alt=""
            />
            <h5 className="text-center fs-6 fw-semibold pt-3">{title}</h5>
            <div className="fw-normal text-dark pt-3">
              {details.length > 200 ? (
                <>
                  <p>{details.slice(0, 200) + "..."}</p>
                  <Link className="ms-3" to={`/category/${_id}`}>
                    <Button>Read More</Button>
                  </Link>
                </>
              ) : (
                <>{details}</>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
