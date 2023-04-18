import React, { useState } from "react";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import "../css/stylesheet.css";
import { act } from "react-dom/test-utils";
import SweetAlert from "sweetalert";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const firebase = useFirebaseApp();
  const auth = getAuth();

  const Registro = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        SweetAlert({
          title: "Registrado con éxito",
          text: "Cuenta registrada, ahora puedes iniciar",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          SweetAlert({
            title: "Error al registrarse",
            text: "Contraseña insegura, debe ser de al menos 6 caracteres.",
            icon: "error",
          });
        }
        if (errorCode === "auth/email-already-in-use") {
          SweetAlert({
            title: "Error al registrarse",
            text: "El correo ya se encuentra registrado.",
            icon: "error",
          });
        }
      });
  };

  const Ingreso = () => {
    setPersistence(auth, browserLocalPersistence);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        SweetAlert({
          title: "Inicio de sesión",
          text: "Sesión iniciada",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/wrong-password") {
          SweetAlert({
            title: "Error al iniciar sesión",
            text: "Correo y/o contraseña incorrecta.",
            icon: "error",
          });
        }
        if (errorCode === "auth/user-not-found") {
          SweetAlert({
            title: "Error al iniciar sesión",
            text: "Correo no registrado.",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <h3>Iniciar sesión</h3>
      <div class="contenedor contenidos-log">
        <label htmlFor="email">Usuario:</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={Ingreso} className="boton loginBoton">
          Ingresar
        </button>
        <button onClick={Registro} className="boton loginBoton">
          Registrarse
        </button>
      </div>
    </div>
  );
};
