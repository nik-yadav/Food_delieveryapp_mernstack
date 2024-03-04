import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { Mycontext } from '../Components/Contextreducer'
import { datacontext } from '../Components/Contextreducer'
import Navbar from '../Components/Navbar'


const Cart = () => {

  const [dataState] = useContext(Mycontext)
  const [id] = useContext(datacontext)
  const length = Object.keys(dataState).length;
  // const [price, setState] = useState(0);

  let price = 0;

  const handleclick = async (e) => {
    if(length == 0){
      alert("Your cart is empty")
      return
    }
    e.preventDefault();

    const array_name = Object.keys(dataState).map((prop)=>{
      return dataState[prop][0];
    })
    const size = Object.keys(dataState).map((prop)=>{
      return dataState[prop][2];
    })
    const quantity = Object.keys(dataState).map((prop)=>{
      return dataState[prop][1];
    })

    const date = new Date();

    const response = await fetch("http://localhost:8000/api/orderdata",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        email:localStorage.getItem('email'),
        data: dataState,
        totalprice: price,
        date: date,
      }),
    });
    const json = await response.json();
    if(json.success === true){
      alert("Payment Successful")
    }

    if (!json.success) {
      alert("Enter valid credentials");
    }

  }

  const handleData = () => {
    let i = 0;

    Object.values(dataState).map((values)=>{
      price += values[1] * values[3];
    })

    return Object.keys(dataState).map((prop)=>(
      <tr key={prop}>
        <td>{++i}</td>
        <td>{dataState[prop][0]}</td>
        <td>{dataState[prop][2]}</td>
        <td>{dataState[prop][1]}</td>
        <td>{dataState[prop][3]}</td>
      </tr>
    ))
  }

  return (
    
    <div className='m-5' style={{maxWidth:"50%"}}>
      <div>
          <Navbar />
      </div>
      <table className='table table-responsive border border-2'>
        <thead className='p-thead-dark mb-2 bg-primary text-white'>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {handleData()}
        </tbody>
      </table>
      <h3>Total Price: ${price}</h3>
      <button type='button' onClick={handleclick}>Payment </button>
      <Link to="/" className="m-3 btn btn-danger">
            HOME
      </Link>
    </div>
  )
}

export default Cart