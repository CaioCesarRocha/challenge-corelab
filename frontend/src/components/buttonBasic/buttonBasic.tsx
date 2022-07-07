import styles from './buttonBasic.module.scss'

interface ButtonBasicProps {
    info: string,
    
    onClick?: () => void;
}

const ButtonBasic = (props: ButtonBasicProps) =>{

    return(
        <button
            className={styles.button}
            type="submit"
            onClick={props.onClick}
            
        >
            {props.info}
        </button>
    )
    
}

export default ButtonBasic;

