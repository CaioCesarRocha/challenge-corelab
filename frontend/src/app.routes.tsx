
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import NewVehicle from './pages/NewVehicle/NewVehicle';
import UpdateVehicle from './pages/UpdateVehicle/UpdateVehicle';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" /> 
                <Route element={<NewVehicle/> } path="/newvehicle"/> 
                <Route element={<UpdateVehicle/> } path="/updatevehicle/:id"/>            
            </Routes>         
        </BrowserRouter>
    )
}

export default AppRoutes;