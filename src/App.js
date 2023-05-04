/* eslint-disable react/jsx-pascal-case */
import './App.css';
import { Outlet } from 'react-router-dom';
import Imagem from './components/img/img';
import Appbar from './components/Appbar/Appbar';
import Embrapa from './img/embrapa_logo.png';

function App() {
  return (
      
    <div className='flex_margin'>
      <Appbar/>
      <div className="flex_container">
        <Outlet/>
      </div>
      <Imagem src={Embrapa} alt="Exemplo de imagem"/>
     </div>   
    
    );
}

export default App;
