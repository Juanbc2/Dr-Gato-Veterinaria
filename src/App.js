import React from "react";
import {  Route,Routes,Link } from "react-router-dom";
import mainpage from "./pages/mainpage";
import logo from './resources/images/topImage.png';
import shop from "./pages/shop";
import clinic from "./pages/clinic";
import './css/normalize.css';
import './css/stylesheet.css';
import Home from './pages/mainpage.js';
import Productos from './pages/shop.js';

const App = () => {
  return (
    <div>
      <body>
        <header class="contenedor">
            <a href="index.html">
                <img src={logo} alt="Logotipo" />
            </a>
            <h1>Dr Gato Veterinaria</h1>
        </header>

        <div class="nav-bg">
            <nav class="navegacion-principal contenedor">
                <Link to='/'>Inicio</Link>
                <Link to='/productos'>Productos</Link>
                <a href="#">Consultas</a>
                <a href="#">Nosotros</a>
            </nav>
        </div>
       <Routes>
       <Route path='/' element={<Home/>}>Navigate now</Route>
       <Route path='/productos' element={<Productos/>}>Navigate now</Route>       
       </Routes>
        <footer>
            <h2>Dr Gato Veterinaria</h2>
        </footer>
      </body>
    </div>
  );
};

export default App;