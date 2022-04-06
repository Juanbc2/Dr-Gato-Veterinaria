import React, { Suspense } from "react";
import {  Route,Routes,Link } from "react-router-dom";
import logo from './resources/images/topImageAux.png';
import './css/normalize.css';
import './css/stylesheet.css';
import Home from './pages/mainpage.js';
import Productos from './pages/shop.js';
import Consultorio from  './pages/consultory.js';
import AboutUs from './pages/about.js';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Auth from './services/auth';
import auth from "./services/auth";
import { getAuth } from "firebase/auth";
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            open: false,
            login: false,
            loginMessage: 'Iniciar sesión',
        }
        this.openModal = this.openModal.bind(this);
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    openModal = () => {
        this.setState({
          showModal: true
        });
      }

      onOpenModal = async()  => {
        if(this.state.login==true){
            const auth = getAuth();
            await auth.signOut();
            this.checkIfLoggedIn();
        }else{
            this.setState({ open: true });
        }
      };
     
      onCloseModal = () => {
        this.setState({ open: false ,showModal: false});
        this.checkIfLoggedIn();
      };

      checkIfLoggedIn =()=> {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user){
            this.setState({
            login: true,loginMessage: 'Cerrar sesión'
        });}else{
           this.setState({
            login: false,loginMessage: 'Iniciar sesión'
        }); 
        }
      }


  render(){
  return (
      <div className="body">
        <header>
            <Link to="/" >
                <img src={logo}></img>
            </Link>
            <h1>Dr Gato Veterinaria</h1>
            
        </header>
        <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                <Link to='/'>Inicio</Link>
                <Link to='/productos'>Productos</Link>
                <Link to='/consultorio'>Consultorio</Link>
                <Link to="/about">Nosotros</Link>
                <button className='boton sombra' onClick={this.onOpenModal}>{this.state.loginMessage}</button> 
            </nav>
        </div>
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <Auth />
      </Modal>
        <Suspense fallback="Cargando productos...">
       <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/productos' element={<Productos/>} />
       <Route path='/consultorio' element={<Consultorio/>} />
       <Route path='/about' element={<AboutUs/>} />
       </Routes>
       </Suspense>
        <footer>
            <h2>Dr Gato Veterinaria</h2>
        </footer>
      </div>
  );
  }
};

export default App;