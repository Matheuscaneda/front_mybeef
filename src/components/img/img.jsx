import React from 'react';
import './img.css'

const Imagem = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt}  className='img_css'/>
    </div>
  );
};

export default Imagem;
