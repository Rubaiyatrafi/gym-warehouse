import React from "react";
import sleeping from "../../../images/sleeping/sleeping.jpg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-danger text-center mt-5">Lazy body builder</h1>
      <img className="img-size" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
