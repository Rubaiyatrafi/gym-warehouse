import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { singleId, name, price } = useParams();
  return (
    <div>
      <h2>Welcome to Detail{singleId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
