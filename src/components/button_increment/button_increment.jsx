import './button_increment.css'


export const Button_Increment = (props) => {

    return(
        <div class="input-icon">
           
                <span class="input-text input-icon teste">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"  viewBox="0 0 12 12" >
                        <path d="M 7.5 7.5 L 11.5 7.5 C 11.885 7.5 12.125 7.917 11.933 8.25 C 11.844 8.405 11.679 8.5 11.5 8.5 L 8.5 8.5 L 7.5 8.5 L 4.5 8.5 C 4.115 8.5 3.875 8.083 4.067 7.75 C 4.156 7.595 4.321 7.5 4.5 7.5 L 7.5 7.5 Z"/>
                    </svg>
                </span>  <input type="number" class="input-text input-icon border_left"/>         
                <span class="input-text input-icon border_right teste">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"  viewBox="0 0 12 12">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </span>
        </div>
    );
}
