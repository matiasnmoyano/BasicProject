import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';

import Basic from './Components/Basic'

function App() {

  return (
    <Switch>
    <Route exact path="/" component={Basic} />
    </Switch>
  );
}

export default App;
