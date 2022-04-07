import { initializeApp } from 'firebase/app';
import { getFirestore, collection,onSnapshot } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import firebaseConfig from '../firebase-config';
import cartData from '../data/cartData';
import carrito from './carrito';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default function App(props) {
  const [productos, setProductos] = useState([{ name: "Loading...", id: "initial" }]);

  function onAdd(item){
    var cartItems = cartData.productos;
  const exist = buscarInArray(cartItems,item.id);
    //const exist = cartItems.includes(itemAux);
    if(exist){
      for(let i = 0; i < cartItems.length; i++){
        if(cartItems[i].id === item.id){
          cartItems[i].qty++;
        }
        
      }
     }else{
        cartItems.push({
            name: item.name,
            id: item.id,
            price: item.prize,
            qty: 1,
        });
    }
}

  function buscarInArray(array,id){    
    for(let i = 0; i < array.length; i++){
      if(array[i].id === id){
        return true;
      }
    }
    return false;    
  }

  

  

  useEffect(
    () =>
      onSnapshot(collection(db, "productos"), (snapshot) =>
        setProductos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className='shop'>
      {productos.map((producto) => (
    <div className='producto sombra'>
    <div className='imageFrame'><img src={`${producto.image}`} alt='foto del producto' draggable='false'></img></div>
    <h2>{producto.name}</h2>
    <h3>$ {producto.prize}</h3>
    <button className='boton sombra' onClick={()=>onAdd(producto)}>Añadir al carrito</button>
</div>
      ))
      }
</div>
  );
}


