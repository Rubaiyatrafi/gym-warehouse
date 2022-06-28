import React from "react";
import { useNavigate } from "react-router-dom";
import "./Single.css";

const Single = ({ single }) => {
  const { id, name, price, description, img } = single;
  const navigate = useNavigate();
  const productDetail = (id) => {
    navigate(`/single/${id}`);
  };
  return (
    <div className="display-inventory">
      <img className="img-style" src={img} alt="" />
      <h2>{name}</h2>
      <h3>Price: {price}</h3>
      <p>{description}</p>
      <button onClick={() => productDetail(id)} className="btn btn-dark">
        Order : {name}
      </button>
    </div>
  );
};

export default Single;
