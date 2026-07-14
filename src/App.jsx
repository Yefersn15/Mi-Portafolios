import { BrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut';
import Rutas from './components/Rutas';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LayOut>
        <Rutas />
      </LayOut>
    </BrowserRouter>
  );
}

export default App;