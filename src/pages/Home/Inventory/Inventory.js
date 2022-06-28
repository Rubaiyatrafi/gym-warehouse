import React, { useEffect, useState } from "react";
import Single from "../Single/Single";
import "./Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch("inventory.json")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div>
      <hr />
      <hr />
      <h1 className="title mt-5 mb-5">Our Products</h1>
      <hr />
      <hr />
      <div className="inventory-container">
        {inventory.map((single) => (
          <Single key={single.id} single={single}></Single>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
