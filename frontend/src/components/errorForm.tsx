interface ErrorFormProps {
    message: string;
}

const ErrorForm = (props: ErrorFormProps) =>{

    return(
        <p className="font-bold text-sm text-red-700">
            {props.message}
        </p>
    )
    
}

export default ErrorForm;