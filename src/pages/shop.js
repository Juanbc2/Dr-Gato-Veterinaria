import '../css/stylesheet.css';
import Productos from './product';
import React from 'react';
import Carrito from './carrito';
import Modal from 'react-responsive-modal';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            open: false,
            key: '',
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

      onOpenModal = ()  => {
            this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false ,showModal: false});
      };

render(){    
    
    return(
    <main className="shop contenedor">     
            <button class="term-compra boton sombra" onClick={this.onOpenModal}>Terminar compra</button>   
        <Productos/>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <Carrito key={this.state.requirementKey}/>
      </Modal>
    </main>
    );
}
}




export default Shop;