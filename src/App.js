import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
