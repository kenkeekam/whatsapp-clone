import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  // pull information from the data layer
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app"> 
          {/* If there is no user prompt login screen */}
    {!user ? (
      <Login />  
    ) : ( 
      <div className="app__body">
        <Router>
        <Sidebar /> {/* Always display Sidebar */}

          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
    </div>
    )}
    
    
      
    </div>
  );
}

export default App;

