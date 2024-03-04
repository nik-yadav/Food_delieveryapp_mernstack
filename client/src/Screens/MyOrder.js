import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState([])

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:8000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('email')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
            // console.log(response);
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    {
                        orderData.length !== 0 ? orderData.map((dataObject)=> {
                            const date1 = new Date(dataObject.date);
                            // console.log(date1)
                            const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
                            const formattedDate = date1.toLocaleDateString('en-US', options);
                            // console.log(formattedDate);
                            const data1 = dataObject.data;

                            return Object.values(data1).map((data)=>{
                                return (
                                            <div>
                                                <div className='col-12 col-md-6 col-lg-3' >
                                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{data[0]}</h5>
                                                            <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                <span className='m-1'>{data[1]}</span>
                                                                <span className='m-1'>{data[2]}</span>
                                                                <span className='m-1'>{formattedDate}</span>
                                                                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                    ₹{data[3]}/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                            </div>
                                        )
                            })
                        }) : ""
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}