import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CartSummary.css';

const CartSummary = ({category}) => {
    const {
        _id,
        author,
        details,
        image_url,
        rating,
        thumbnail_url,
        title,
        total_view,
      } = category;
        // console.log(category);
    return (
        <>
      <div className="">
        <div className="cart-summary">
          <div className="summary-card-width shadow-lg p-3 mb-5 bg-body rounded">
            <img className='w-100' style={{height: '240px'}} src={image_url} alt="" />
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
              
            <div>
                <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default CartSummary;