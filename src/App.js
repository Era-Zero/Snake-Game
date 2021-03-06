import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Home from './components/Home'
import Game from './components/Game'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game} />
            </Switch>
        </Router>
    )
}
  
export default App;
