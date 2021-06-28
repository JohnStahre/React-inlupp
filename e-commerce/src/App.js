
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom' 
import Navbar from './components/Navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';


function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
    
      
      <div className="container mt-4"> 

          <Switch>
            < Route exact path= "/" component={Home} />
            < Route exact path= "/products" component={Products} />
          </Switch>
      </div>
      
      </BrowserRouter>
  );
}

export default App;
