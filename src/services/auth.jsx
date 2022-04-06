import React, { useState } from "react";
import 'firebase/auth';
import { getAuth,sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import '../css/stylesheet.css';
import { act } from "react-dom/test-utils";
import SweetAlert from 'sweetalert';

export default (props)=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
                icon: "sucess",
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/weak-password"){window.alert("Contraseña insegura, debe ser de al menos 6 caracteres.")};
            if(errorCode === "auth/email-already-in-use"){window.alert("El correo ya se encuentra registrado.")};
        });
    }

    const Ingreso = () => {

         signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            SweetAlert({
                title: "Inicio de sesión",
                text: "Sesión iniciada",
                icon: "sucess",
              });
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    
    }

    const Reestablecer = () => {

        var actionCodeSettings = {
            url: 'https://dr-gato-veterinaria.web.app/?email=user@example.com',
            iOS: {
              bundleId: 'com.example.ios'
            },
            android: {
              packageName: 'com.example.android',
              installApp: true,
              minimumVersion: '12'
            },
            handleCodeInApp: true
          };
        sendPasswordResetEmail(auth,email,actionCodeSettings).then(() => {
            window.alert("Correo de recuperación enviado con éxito.");
        }).catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            if(errorCode === "auth/invalid-email"){window.alert("Correo inválido, verifique.")};
            if(errorCode === "auth/user-not-found"){window.alert("El correo no se encuentra registrado.")};
        })
    }
    
return(
    <div>
        <center className="login">
            <h3>Iniciar sesión</h3>
            <div class="contenedor contenidos-log">
                    <label htmlFor="email">Usuario:</label>
                    <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor='password'>Contraseña:</label>
                    <input type='password' id='password'  onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={Ingreso} className='boton loginBoton'>Ingresar</button>
                    <button onClick={Registro} className='boton loginBoton'>Registrarse</button>
            </div>
            <h4>¿Olvidó su contraseña?  </h4><button type='text' onClick={Reestablecer}>Reestablecer aquí.</button>
        </center>

    </div>
)


}