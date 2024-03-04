import React, { useEffect, useState, useContext } from 'react'
import { Mycontext } from './Contextreducer';

const Card = (props) => {

  const [values, setValues] = useState(1);
  const [dataState, setdatastate] = useContext(Mycontext);
  
  let options = props.options;
  let priceoptions = Object.keys(options);
  const [priceoption, setpriceoption] = useState(priceoptions['0']);
  let arrayfood = [];

  const handlenumber = (e) => {
    setValues(e.target.value);
  }

  const handleData = (e) => {
    const value = e.target.value;
    setpriceoption(value)
  }

  const handleCard= () =>{
    const food = props.foodName
    arrayfood.push(food);
    arrayfood.push(values,priceoption)
    arrayfood.push(options[priceoption])
    const duplicateobj = {...dataState};
    duplicateobj[`${food}`] = arrayfood
    setdatastate(prevState => {
      return duplicateobj;
    });
    
    // console.log("=========datastate============")
    // console.log(prevState)
    // console.log(dataState);
  }

  useEffect(()=>{
    console.log('done')
    // console.log(dataState)
  },[values,priceoption,dataState])
  

  return (
    <div>
        <div className="card" style={{ width: "18rem","maxHeight": "360px" }}>
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}} />
          <div className="card-body">
            <h5 className="card-title"> {props.foodName}</h5>
            <div className="container  w-100">
                <select className="h-100 bg-success rounded" onChange={handlenumber}>
                    {
                        Array.from(Array(6), (e,i) =>{
                            return(
                                <option  key={i+1} value={i+1} >
                                    {i+1} 
                                </option>
                            )
                        })
                    }
                </select>
                <select className="m-2 h-10 bg-success rounded" onChange={handleData} >
                    {priceoptions.map((data) =>{
                      return <option key={data} value={data} >
                        {data}
                        </option>
                    })}
                </select>

                <div className="d-inline h-100 fs-5">Value: {options[`${priceoption}`]}</div>
            </div>
          <hr></hr>
          <button className={'btn btn-success justify-center ms-2'} onClick={handleCard}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}

export default Card