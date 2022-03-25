import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router , Route, Switch , Link} from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail/>
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        
    </div>
    </Router>
  );
}

export default App;
