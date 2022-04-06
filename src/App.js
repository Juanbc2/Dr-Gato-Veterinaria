import React, { Suspense } from "react";
import {  Route,Routes,Link,Navigate } from "react-router-dom";
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
import NotFound from "./pages/404";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            open: false,
            login: false,
            loginMessage: 'Iniciar sesión',
            usuario: ''
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
            login: true,loginMessage: 'Cerrar sesión', usuario: user.email+' '
        });}else{
           this.setState({
            login: false,loginMessage: 'Iniciar sesión', usuario: ''
        }); 
        }
      }


  render(){
  return (
      <div className="body">
        <header>
            <Link to="/" >
                <img src={logo} alt='logo' draggable='false'></img>
            </Link>
            <h1>Dr Gato Veterinaria</h1>
            
        </header>
        <div className="nav-bg">
            <nav className="navegacion-principal contenedor">
                <Link to='/'>Inicio</Link>
                <Link to='/productos'>Productos</Link>
                <Link to='/consultorio'>Consultorio</Link>
                <Link to="/about">Nosotros</Link>
                <h6>{this.state.usuario}</h6>
                <button className='boton sombra' onClick={this.onOpenModal}>{this.state.loginMessage}</button> 
            </nav>
        </div>
      <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <Auth />
      </Modal>
        <Suspense fallback="Cargando productos...">
       <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/productos' element={<Productos/>} />
       <Route exact path='/consultorio' element={<Consultorio/>} />
       <Route exact path='/about' element={<AboutUs/>} />
       <Route exact path='/404' element={<NotFound/>}/>
       <Route
        path="/*"
        element={<Navigate to="/404" replace />}
    />
       
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