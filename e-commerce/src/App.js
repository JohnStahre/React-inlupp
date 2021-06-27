
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom' 
import Navbar from './components/Navigation/Navbar'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
