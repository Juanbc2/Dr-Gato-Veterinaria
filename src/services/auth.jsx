import React, { useState } from "react";
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
            console.log("Creado con éxito");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    const Ingreso = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    
return(
    <div>
        <div>
            <label htmlFor="email">Correo electrónico: </label>
            <input type='email' id='email' onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label htmlFor="password">Contraseña: </label>
            <input type='password' id='password'  onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={Registro}>Registrar</button>
            <button onClick={Ingreso}>Ingresar</button> 
        </div>
    </div>
)
}