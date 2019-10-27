import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Pages
import Welcome from "./Pages/Welcome/Welcome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ChatPage from "./Pages/ChatPage/ChatPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import Shop from "./Pages/Shop/Shop";

//Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/chat/:id" component={ChatPage} />
          <Route exact path="/profile/:id" component={ProfilePage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
