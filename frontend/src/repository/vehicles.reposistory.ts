import api from '../services/api'

interface vehicle{
    name: string,
    brand: string,
    year: number | string,
    color: string,
    price: string,
    plate: string,
    description?: string
}

export var initialValues = { name: '', brand: '', year: '', price: "", 
color: '', plate: '', description: ''};


export const createVehicle = async(vehicle: vehicle) =>{

    const response = await api.post('/vehicles', vehicle);

    return response.data.name
}

export const updateVehicle = async(id: string, vehicle: vehicle) =>{
    const response = await api.put(`/vehicles/${id}`, vehicle);

    return response
}

export const getOneVehicle = async(id: string)=>{
    const response = await api.get(`vehicles/${id}`)

    const vehicle ={
        id: response.data[0]._id,
        name: response.data[0].name,
        brand: response.data[0].brand,
        year: response.data[0].year,
        color: response.data[0].color,
        price: response.data[0].price,
        plate: response.data[0].plate,
        description: response.data[0].description             
    }

    return vehicle
}