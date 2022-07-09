import { useFormik } from 'formik';

import Layout from "../../components/layout/layout";
import ButtonBasic from "../../components/buttonBasic/buttonBasic";
import InputBasic from "../../components/inputBasic/inputBasic";
import {colors} from "../../services/colors"
import ErrorForm from '../../components/errorForm';
import styles from './NewVehicle.module.scss';
import * as handleVehicle from '../../repository/vehicles.reposistory'
import * as validationForm from "../../services/validationForm"


const NewVehicle = () =>{

    const formik  = useFormik({
        initialValues: validationForm.initialValues,
    
        validationSchema: validationForm.schema,
    
        enableReinitialize: true,

        onSubmit: async (data) => {
            const newVehicle = {
                name: data.name,
                brand: data.brand,
                year: data.year,
                color: data.color || "prata",
                price: data.price,
                plate: data.plate,
                description: data.description || "-"
            }
            const response = await handleVehicle.createVehicle(newVehicle);     
            formik.resetForm();
            alert(`Veículo ${response} cadastrado com sucesso!`);
        }
    });

    return(
        <Layout>
            <div className={styles.Content}>
                <form
                    className={styles.Form}
                    onSubmit={formik.handleSubmit}
                >   

                    <h1> Cadastro Novo Veículo </h1>
                      
                    <InputBasic
                        info="Modelo:"
                        name="name"
                        placeholder="Modelo do Veículo"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name && <ErrorForm message={formik.errors.name}/>}

                    <InputBasic
                        info="Marca:"
                        name="brand"
                        placeholder="Marca do Veículo"
                        type="text"
                        value={formik.values.brand}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.brand && formik.touched.brand && <ErrorForm message={formik.errors.brand}/>}

                    <InputBasic
                        info="Ano:"
                        name="year"
                        placeholder="Ano de lançamento"
                        type="number"
                        value={formik.values.year}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.year && formik.touched.year && <ErrorForm message={formik.errors.year}/>}

                    <InputBasic
                        info="Preço:"
                        name="price"
                        placeholder="Preço atual do veículo"
                        type="text"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.price && formik.touched.price && <ErrorForm message={formik.errors.price}/>}
                        

                    <p> Cor: </p>
                    <select name="color" onChange={formik.handleChange}>
                        {colors.map((color, key) =>(                            
                            <option key={key} value={color.value}> 
                                {color.color}
                            </option>                         
                        ))}
                    </select>

                    <InputBasic
                        info="Placa:"
                        name="plate"
                        placeholder="Placa do Veículo"
                        type="text"
                        value={formik.values.plate}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.plate && formik.touched.plate && <ErrorForm message={formik.errors.plate}/>}

                    <p> Descrição: </p>
                    <textarea className={styles.TextArea} 
                        name="description"
                        placeholder="Descrição do veículo"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
         

                    <ButtonBasic info="Cadastrar"/>
                </form>
            </div>
        </Layout>
    );
}

export default NewVehicle;