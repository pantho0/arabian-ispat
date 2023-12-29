import React from "react";
import Container from "../Utils/Container";
import asrmdwr from "../../assets/images/asrm500dwr.jpg"

const Products = () => {
  return (
    <div className="mt-20 mb-20" id="products">
      <Container>
      <h2 className="text-6xl text-center text-[#017C9D]">Products</h2>
      {/* cards */}
      <div className="flex gap-4 mt-10"> 
        {/* Card -1 */}
        <div className="card card-compact  bg-base-100 shadow-xl  ">
          <figure>
            <img
              className="transition-transform transform hover:scale-105"
              src={asrmdwr}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ASRM/TMT/B500DWR</h2>
          </div>
        </div>
        {/* Card -2 */}
        <div className="card card-compact  bg-base-100 shadow-xl  ">
          <figure>
            <img
              className="transition-transform transform hover:scale-105"
              src={asrmdwr}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ASRM/TMT/B420DWR</h2>
          </div>
        </div>
        {/* Card -3 */}
        <div className="card card-compact  bg-base-100 shadow-xl  ">
          <figure>
            <img
              className="transition-transform transform hover:scale-105"
              src={asrmdwr}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">ASRM/TMT/B500CWR</h2>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default Products;
