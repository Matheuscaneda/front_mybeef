import './button.css';
import { Link } from 'react-router-dom';
import AlertDialog_var from '../alert/Alert';



export const Button_small = (props) => {
    const handleClick = () => {
    // Chame o componente AlertDialog_var aqui
    <AlertDialog_var/>;
  };
    return(

        <Link type="button" class="button_small primary" onClick={handleClick}>{props.texto} </Link> 

    );
}