import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/mainpage';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config';

ReactDOM.render(
  <React.StrictMode>

    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Cargando gatitos con estetoscopio..'}>
        <App/>
      </Suspense>
    </FirebaseAppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


