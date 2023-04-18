import "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import SweetAlert from "sweetalert";

const ingreso = (auth, email, password) => {
  setPersistence(auth, browserLocalPersistence);
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert({
        title: "Inicio de sesión",
        text: "Sesión iniciada",
        icon: "success",
      });
      return true;
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
      return false;
    });
};
