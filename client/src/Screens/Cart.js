import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../Components/Contextreducer";
import { datacontext } from "../Components/Contextreducer";
import Navbar from "../Components/Navbar/Navbar";
import { Delete } from "@mui/icons-material";
import { loadata } from "../utils/api";
import api from "../utils/service";

const Cart = () => {
  const [dataState, setdatastate] = useContext(Mycontext);
  const length = Object.keys(dataState).length;

  let price = 0;

  const handleclick = async (e) => {
    if (length === 0) {
      alert("Your cart is empty");
      return;
    }
    e.preventDefault();

    const date = new Date();
    const response = await api.post("/api/orderdata", {
      email: localStorage.getItem("email"),
      data: dataState,
      totalprice: price,
      date: date,
    });
    if(response.data.success === true){
      alert("Payment Successful")
    }

    if (!response.data.success) {
      alert("Enter valid credentials");
    }
  };

  const handleData = () => {
    let i = 0;

    Object.values(dataState).map((values) => {
      price += values[1] * values[3];
    });

    return Object.keys(dataState).map((prop) => (
      <tr key={prop}>
        <td>{++i}</td>
        <td>{dataState[prop][0]}</td>
        <td>{dataState[prop][2]}</td>
        <td>{dataState[prop][1]}</td>
        <td>{dataState[prop][3]}</td>
        <td>
          <button>
            <Delete />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="m-5" style={{ maxWidth: "50%" }}>
      <div>
        <Navbar />
      </div>
      <table className="table table-responsive border border-2">
        <thead className="p-thead-dark mb-2 bg-primary text-white">
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{handleData()}</tbody>
      </table>
      <h3>Total Price: ${price}</h3>
      <button type="button" onClick={handleclick}>
        Payment{" "}
      </button>
      <Link to="/" className="m-3 btn btn-danger">
        HOME
      </Link>
    </div>
  );
};

export default Cart;
