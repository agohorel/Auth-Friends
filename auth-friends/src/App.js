import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div>
      <Router>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/friends" component={FriendsList} />
      </Router>
    </div>
  );
}

export default App;
