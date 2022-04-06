import React, { useState } from "react";
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import '../css/stylesheet.css';

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
            window.alert("Registrado con éxito");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode === "auth/weak-password"){window.alert("Contraseña insegura, debe ser de al menos 6 caracteres.")};
            if(errorCode === "auth/email-already-in-use"){window.alert("El correo ya se encuentra registrado.")};
        });
    }

    const Ingreso = () => {
        setPersistence(auth,browserLocalPersistence).then(() =>{
         signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          window.alert("Ingreso exitoso");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode === "auth/wrong-password"){window.alert("Usuario y/o contraseña incorrecta.")};
        });
    });
    }
    
return(
    <div >
        <center className='login'>
            <h3>Iniciar sesión</h3>
            <table>
                <tr>
                    <td>Usuario:</td>
                    <td><input type='email' id='email' onChange={(e) => setEmail(e.target.value)}/></td>
                </tr>
                <tr>
                <td>Contraseña:</td>
                    <td><input type='password' id='password'  onChange={(e) => setPassword(e.target.value)}/></td>
                </tr>
            </table>
            <button onClick={Ingreso} className='boton loginBoton'>Ingresar</button>
            <button onClick={Registro} className='boton loginBoton'>Registrarse</button>
            
        </center>
    </div>
)
}