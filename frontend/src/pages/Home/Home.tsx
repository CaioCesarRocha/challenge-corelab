import {  ChangeEvent, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

import Layout from "../../components/layout/layout";
import styles from './Home.module.scss';
import ButtonBasic from "../../components/buttonBasic/buttonBasic";
import CardItem from "../../components/cardItem/cardItem";
import * as icon from '../../components/icons';
import * as handleVehicle from '../../repository/vehicles.reposistory';
import AlertItem from '../../components/alert/alert'


const Home = () =>{
    const navigate = useNavigate();
    const [renderRemoveAlert, setRenderRemoveAlert] = useState<boolean>(false)
    const [renderFavorite, setRenderFavorite] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('')
    const [vehicles, setVehicles] = useState<any[]>([])

    useEffect(() =>{
        async function getVehicles(){
            const response = await handleVehicle.getVehicles();
            console.log(response.data)
            setVehicles(response.data)
        }

        getVehicles()
    }, [])

    async function removeVehicle(id: string){
        const response = await handleVehicle.deleteVehicle(id)

        if(response.data === true) setRenderRemoveAlert(true)     
    }

    async function addFavorite(id: string, vehicle:any) {
        const newVehicle ={...vehicle, isFavorite: true }

        await handleVehicle.updateVehicle(id, newVehicle);

        setRenderFavorite(true)
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    function searchProduct(search: string){

    }


    return(
        <Layout>
           <div className={styles.Content}>
                <div className={styles.SearchContent}>
                    <input 
                        placeholder='Buscar veículo'
                        type="text"
                        value={search}
                        onChange={handleSearchChange}        
                    />

                    <button onClick={() => searchProduct(search)}>
                        <i>{icon.search}</i>
                    </button>
                </div>

                {renderFavorite ? 
                    <AlertItem
                        info={`Veículo adicionado aos favoritos.`}
                        color={'#04AA6D'}
                        onClick={() => setRenderFavorite(false)}
                />
                :   null
                }

            {renderRemoveAlert ? 
                <AlertItem
                    info={`Veículo excluído com sucesso.`}
                    color={'#f44336'}
                    onClick={() => setRenderRemoveAlert(false)}
                />
            :   null
            }
           

                <div className={styles.ContentCard}>
                    {vehicles.map((vehicle)=>(
                        <CardItem
                            key={vehicle._id}
                            id={vehicle._id}
                            name={vehicle.name}
                            brand={vehicle.brand}
                            color={vehicle.color}
                            price= {vehicle.price}
                            year= {vehicle.year}
                            description={vehicle.description}
                            plate={vehicle.plate}
                            onFavorite={() => addFavorite(vehicle._id, vehicle)}
                            onDelete={() => removeVehicle(vehicle._id)}
                        />
                    ))}
                </div>  

                <ButtonBasic
                    info="Adicionar"
                    onClick={() => navigate(`newvehicle`)}
                />             
            </div>
        </Layout>
    );
}

export default Home;