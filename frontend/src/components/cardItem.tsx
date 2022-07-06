import * as icon from './icons/index'


interface CardItemProps {
    name: string,
    brand: string,
    color: string,
    year: number,
    plate: string,
    price: string,
    description: string,
}

const CardItem = (props: CardItemProps) =>{

    return(
        <div className="p-5 rounded-lg w-64 bg-red-300 flex flex-col">

            <div className="flex flex-row justify-end">
                <i className="pl-3 text-2xl hover:text-gray-500 cursor-pointer"> 
                    {icon.edit} 
                </i>
                <i className="pl-3 text-2xl hover:text-gray-500 cursor-pointer"> 
                    {icon.remove}
                </i>
                <i className="pl-3 text-2xl hover:text-gray-500 cursor-pointer"> 
                    {icon.heart} 
                </i>
            </div>

            <p>Name: {props.brand} {props.name} </p>
            <p>Preço: R$ {props.price} </p>
            <p>Ano: {props.year} </p>
            <p>Cor: {props.color} </p>
            <p>Descrição: {props.description} </p>

        </div>
    )
}

export default CardItem;