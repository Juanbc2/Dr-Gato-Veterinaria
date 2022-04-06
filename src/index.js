import React,{Suspense} from 'react';
import './css/index.css';
import App from './App.js';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config';
import {BrowserRouter as Router} from 'react-router-dom'
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Cargando gatitos con estetoscopio..'}>
        <Router>
        <App/>          
        </Router>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
);


