
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import NewVehicle from './pages/NewVehicle/NewVehicle';
import UpdateVehicle from './pages/UpdateVehicle/UpdateVehicle';
import Favorites from './pages/FavoriteVehicles/FavoriteVehicles';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" /> 
                <Route element={<NewVehicle/> } path="/newvehicle"/> 
                <Route element={<UpdateVehicle/> } path="/updatevehicle/:id"/> 
                <Route element={<Favorites/>} path="/favorites"/>           
            </Routes>         
        </BrowserRouter>
    )
}

export default AppRoutes;