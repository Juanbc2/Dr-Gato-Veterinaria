import '../css/stylesheet.css';
import Productos from './product';
import React from 'react';
import Carrito from "./carrito";
import useState from 'react';


class Shop extends React.Component{
    

    constructor(props){
        super(props);
        this.state = {
            cartItems:[] ,
            item: {},
            

        }

        this.onAdd = this.onAdd.bind(this);
        
    } 

    

    onAdd = (product) =>{                
        const exist = this.cartItems.find((x)=> x.name === product.name);

        const setCartItems = useState([]);
        
        if(exist){
            setCartItems(this.state.cartItems.map((x)=> x.name === product.name ? {...exist, qyt: exist.qty+1}:x));
        }
        else{
            setCartItems([...this.state.cartItems, {...product, qty: 1}]);
        }        
    }

render(){
    return(
    <main class="shop contenedor">        
        <Productos/>
        <aside className='shop-cart sombra'>
            <h2>Cart items</h2>
            
            <div>{this.state.cartItems.length === 0 && <div>Cart is Empty</div>}</div>{
                this.state.cartItems.map((item)=>(
                    <div key={this.state.item.id} className="row">
                        <div>
                            <button onClick={this.onAdd(item)} className="add">+</button>
                            <button onRemove={this.onAdd(item)} className="remove">-</button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}

                        </div>
                    </div>                     
                ))
            }
        </aside>
        <Carrito ></Carrito >
        
    </main>
    );
}
}




export default Shop;