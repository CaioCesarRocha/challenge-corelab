
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import NewVehicle from './pages/NewVehicle';


const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" /> 
                <Route element={<NewVehicle/> } path="/newvehicle"/>             
            </Routes>         
        </BrowserRouter>
    )
}

export default AppRoutes;