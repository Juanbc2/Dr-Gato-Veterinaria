import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App.js';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>

    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Cargando gatitos con estetoscopio..'}>
        <Router>
        <App/>          
        </Router>
      </Suspense>
    </FirebaseAppProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


