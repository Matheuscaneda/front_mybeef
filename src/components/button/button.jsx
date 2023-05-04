import './button.css';
import { Link } from 'react-router-dom';

export const Button = (props) => {
    return(

        <Link type="button" class={`button ${props.props_style}`} to={props.link}>{props.texto}</Link> 

    );
}