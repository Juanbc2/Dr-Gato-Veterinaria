import '../css/stylesheet.css';
import React from 'react';
import notFoundImage from '../resources/images/404.png';

class notFound extends React.Component{
render(){
    return(
    <main>
        <div class="contenedor">
        <div align="center" className="sombra">
            <h1>¡Página no encontrada! Meow!</h1>
            <img src={notFoundImage} alt='gatito notFound' draggable='false' />
            </div>
        </div>
       
    </main>
    );
}
}

export default notFound;