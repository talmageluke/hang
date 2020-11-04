import React from 'react';
import { Switch } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from './components/Home';
import CreateHang from './components/CreateHang';
import JoinHang from './components/JoinHang';
import Messages from './components/Messages';
import UserProfile from './components/UserProfile';
import "./App.css";
import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <CustomNavbar />
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path='/createHang' component={CreateHang} />
          <ProtectedRoute path='/joinHang' component={JoinHang} />
          <ProtectedRoute path='/messages' component={Messages} />
          <ProtectedRoute path='/userProfile' component={UserProfile} />
        </Switch>
    </div>
  );
};

export default App;