import './button.css'

export const Button = (props) => {
    return(
    <button type="button" class="button">{props.texto}</button>
    );
}