import {  ChangeEvent, useState } from "react";
import {useNavigate} from 'react-router-dom'

import Layout from "../components/layout";
import CardItem from "../components/cardItem";
import * as icon from '../components/icons';


const Home = () =>{
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>('')


    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    function searchProduct(search: string){

    }


    return(
        <Layout>
           <div className="flex flex-col m-auto mt-5 pt-5 w-4/5 bg-orange-200 ">
                <div className="m-auto flex flex-row w-3/5">
                    <input 
                        className='outline-none border border-transparent align-middle h-12 w-full
                        text-gray-600 bg-emerald-200 font-bold p-2 sm:px-14  rounded-l-full'
                        placeholder='Buscar veículo'
                        type="text"
                        value={search}
                        onChange={handleSearchChange}        
                    />

                    <button 
                        className="h-12 p-2 text-2xl bg-white text-gray-900 bg-emerald-300  
                        hover:bg-emerald-600 hover:text-white rounded-r-full "
                        onClick={() => searchProduct(search)}
                    >
                        {icon.search}
                    </button>
                </div>

                <div className="m-auto mt-5 ">
                    <CardItem
                        name= 'Uno'
                        brand= 'Fiat'
                        color= 'Prata'
                        price= '15.000'
                        year= {2009}
                        description='Carro usado - 3 anos'
                        plate='agh5489'
                    />
                </div>               

                <button
                    className=" m-auto bg-emerald-300 rounded-full p-3 mt-10 w-72 font-bold text-gray-700
                    hover:bg-emerald-600 hover:text-white "
                    onClick={() => navigate(`newvehicle`)}
                >
                    ADICIONAR
                </button>
            </div>
        </Layout>
    );
}

export default Home;