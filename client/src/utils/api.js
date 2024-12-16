import api from './service.js'

const loadata = async() => {
    const userid = localStorage.getItem('id')
    const response = await api.get(`/api/createcard/${userid}`)
    const json = await response.json();
    // setdatastate(json.orders)
}

export {loadata}

