import React, { useState } from "react";
import cartData from "../data/cartData";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebaseConfig from "../firebase-config";
import { stringify } from "@firebase/util";
import SweetAlert from "sweetalert";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const auth = getAuth();
  const [cartItems, setCartItems] = useState(cartData.productos);
  const [test, setTest] = useState("adsadas");

  function onAdd(item, int) {
    var cartItems = cartData.productos;
    //const exist = buscarInArray(cartItems,item.id);
    if (item.qty > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
          cartItems[i].qty = cartItems[i].qty + int;
          //console.log(cartItems[i].name + " " + cartItems[i].qty);
          if (cartItems[i].qty == 0) {
            cartItems.splice(i, 1);
          }
        }
      }
    } else {
      //console.log("esta vacío:" + cartItems.length);
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === item.id) {
          cartItems.splice(i, 1);
        }
      }
      //console.log("cantidad productos " + cartItems.length);
    }

    let arraycopy = [];

    for (let i = 0; i < cartItems.length; i++) {
      arraycopy.push(cartItems[i]);
    }

    return arraycopy;
  }

  const handleNew = async () => {
    var user = auth.currentUser;
    if (user) {
      const collectionRef = collection(db, "pedidos");
      var json = JSON.stringify(cartItems);
      const payload = { UID: user.uid, json: json };
      await addDoc(collectionRef, payload);
      SweetAlert({
        title: "Sucess",
        text: "Pedido hecho con éxito! gracias por comprar con Dr Gato!",
        icon: "success",
      });
    } else {
      SweetAlert({
        title: "Error",
        text: "Antes de hacer el pedido, inicie sesión.",
        icon: "error",
      });
    }
  };

  //console.log("Esto es: ", cartData.productos.length);
  return (
    <aside className="shop-cart sombra">
      <h2>Elementos en el carrito:</h2>
      {cartItems.length === 0 && <h3>El carrito está vacío</h3>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div class="botones-carrito">
            <div>
              <h3 class="nombres-carrito">
                {item.name}:<br/> {item.qty} x ${item.price} = ${item.qty*item.price}
              </h3>
            </div>{" "}
            <button 
              onClick={() => {
                var a = onAdd(item, -1);
                setCartItems(a);
              }}
              className="sombraCarrito remove"
            >-</button>
            <button 
              onClick={() => {
                var a = onAdd(item, 1);
                setCartItems(a);
              }}
              className="sombraCarrito add"
            >+</button>
          </div>
        </div>
      ))}
      {cartItems.length != 0 && (
        <button className="boton sombra" onClick={() => handleNew()}>
          Comprar!
        </button>
      )}
    </aside>
  );
}
