import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Home from './pages/Home'
import Sport from "./pages/Sport";
import Tech from "./pages/Tech";
import Science from "./pages/Science";


function App() {
  return (
    <Router>
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/science" component={Science}/>
      <Route path="/health" component={Health}/>
      <Route path="/business" component={Business}/>
      <Route path="/entertainment" component={Entertainment}/>
      <Route path="/tech" component={Tech}/>
      <Route path="/sport"component={Sport}/>


      </Switch>
    </Router>
  );
}

export default App;
