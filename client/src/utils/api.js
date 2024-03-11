const loadata = async() => {
    const userid = localStorage.getItem('id')
    let response = await fetch(`http://localhost:8000/api/createcart/${userid}`, {
      method: "GET",
      headers:{
        "Content-Type":"application/json"
      },
    })
    const json = await response.json();
    console.log(json)
    // setdatastate(json.orders)
}

export {loadata}

