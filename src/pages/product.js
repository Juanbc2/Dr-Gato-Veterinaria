import { initializeApp } from 'firebase/app';
import { getFirestore, collection,onSnapshot } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import firebaseConfig from '../firebase-config';


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default function App() {
  const [productos, setProductos] = useState([{ name: "Loading...", id: "initial" }]);

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
    <button className='boton sombra'>Añadir al carrito</button>
</div>
      ))
      }
</div>
  );
}


/*
  async function getProductos(db){
  //useEffect({});
  const productosCol = collection(db, 'productos');
  const productosSnapshot =await getDocs(productosCol);
  const productosList = productosSnapshot.docs.map((doc) => doc.data());
  //console.log(`data ${JSON.stringify(productosList)}`);
  console.log(productosList);
  return productosList;
}

export const productosList = getProductos(db);
*/