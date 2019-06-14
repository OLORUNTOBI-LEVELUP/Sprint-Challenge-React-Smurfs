import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      ErrorMessage: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => this.setState({ ErrorMessage: err.message }));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  addSmurf = smurfs => {
    this.setState({ smurfs: smurfs });
  };

 deleteSmurf = id => {
   axios.delete(`http://localhost:3333/smurfs/${id}`)
   .then(res => this.setState({ smurfs: res.data }))
 }

  render() {
    return (
      <Router className="App">
        <div>
          <ul className="navbar">
            <li>
              <NavLink exact to="/" activeClassName="activeNavButton">
                Smurfs
              </NavLink>
            </li>
            <li>
              <NavLink to="/smurf-form" activeClassName="activeNavButton">
                Smurf-Form
              </NavLink>
            </li>
          </ul>
          <Route
            path="/smurf-form"
            render={() => <SmurfForm addSmurf={this.addSmurf} />}
          />
          <Route
            exact path="/"
            render={() => <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.props.deleteSmurf}  />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
