import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import Edit from "./components/Edit";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Route component={Nav}></Route>
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <PrivateRoute path="/add-friend" component={Form} />
        <PrivateRoute path="/edit-friend" component={Edit} />
      </Router>
    </div>
  );
}

export default App;
