import './mainpage.css';
import {useFirebaseApp} from 'reactfire';
import Auth from '../services/auth';

function App() {

  const firebase = useFirebaseApp();
  return (
    <div>
      <h1>Usuario: </h1>
      <Auth/>
    </div>
    
  );
}

export default App;
