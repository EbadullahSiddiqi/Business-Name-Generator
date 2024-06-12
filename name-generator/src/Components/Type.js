import React from "react";

export default function Type() {
  return (
    <div className="my-4">
      <select className="form-select" aria-label="Default select example">
        <option defaultValue={"Select your Business Type"}>Select your Business Type</option>
        <option value="1">Coffee Shop</option>
        <option value="2">Clothing Brand</option>
        <option value="3">SMMA</option>
      </select>
    </div>
  );
}
