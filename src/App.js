import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Navigation } from './components/Navigation';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';


const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navigation />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/about'} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
