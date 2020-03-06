import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './shared/Header';
import Home from './components/Home/Home';
import Articulos from './components/Articulos/Articulos';
import Scroll from './components/Scroll';


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articulos" component={Articulos} />
            <Route exact path="/scroll" component={Scroll} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
