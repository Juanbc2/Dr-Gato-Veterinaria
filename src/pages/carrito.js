import React from 'react';


export default function Carrito(props){

    return (<aside className='shop-cart sombra'>
        <h2>Elementos del carrito</h2>

    </aside>);

}

/*function Carrito(props){
    const {cartItems, onAdd, onRemove} = props;
    return(
        <aside>
            <h2>Cart items</h2>
            <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>{
                cartItems.map((item)=>(
                    <div key={item.id} className="row">
                        <div>
                            <button onClick={()=>onAdd(item)} className="add">+</button>
                            <button onRemove={()=>onAdd(item)} className="remove">-</button>
                        </div>
                        <div>
                            {item.qty} x ${item.price.toFixed(2)}

                        </div>
                    </div>                     
                ))
            }
        </aside> 
    );
}

class CarritoComponent extends React.Component{
    render(){
        return(
        <div>
            {Carrito()}
        <Carrito></Carrito>
        </div>
        );
    }
}

export default CarritoComponent;*/