// import './App.css';
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import CreateHang from './components/CreateHang';
// import JoinHang from './components/JoinHang';
// import Messages from './components/Messages';
// import UserProfile from './components/UserProfile';
// import CustomNavbar from './components/CustomNavbar';
// import LoginButton from './components/login_button';
// // import Login from './components/Login';
// // import Signup from './components/Signup';


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <CustomNavbar />
//         <Switch>
//           {/* <Route exact path='/' component={Auth0Login} /> */}
//           {/* <Route path='/signup' component={SignupButton} /> */}
//           <Route path='/home' component={Home} />
//           <Route path='/createHang' component={CreateHang} />
//           <Route path='/joinHang' component={JoinHang} />
//           <Route path='/messages' component={Messages} />
//           <Route path='/userProfile' component={UserProfile} />
//           <LoginButton />
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;


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