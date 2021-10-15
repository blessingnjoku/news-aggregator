import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';

import Home from './pages/Home'
import Main from "./pages/Main";



function App() {
  return (
    <Router>
     <Switch>
      <Route path="/" exact component={Main}/>

      </Switch>
    </Router>
  );
}

export default App;
