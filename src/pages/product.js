import { initializeApp } from 'firebase/app';
import { getFirestore, collection,onSnapshot } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import firebaseConfig from '../firebase-config';


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default function App(props) {
  const [productos, setProductos] = useState([{ name: "Loading...", id: "initial" }]);
  const onAdd = (prod) =>{
    console.log(prod.name);

    //no sé hacer que este producto "prod" se mande a shop.onAdd()
    //


  };

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
    <div className='imageFrame'><img src={`${producto.image}`} alt='foto del producto'></img></div>
    <h2>{producto.name}</h2>
    <h3>$ {producto.prize}</h3>
    <button className='boton sombra' onClick={()=>onAdd(producto)}>Añadir al carrito</button>
</div>
      ))
      }
</div>
  );
}


