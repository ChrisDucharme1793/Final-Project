import axios from 'axios'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/index"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
// import { useAuth0 } from "./react-auth0-spa";
// import history from "../src/utils/history"
import NFL from "./pages/NFL";
import NCAA from "./pages/NCAA";
import MLB from "./pages/MLB";
import EPL from "./pages/EPL";
import LALIGA from "./pages/LALIGA";
import BUNDESLIGA from "./pages/BUNDESLIGA";
import AddBalance from "./pages/AddBalance";
import PlaceBet from './pages/PlaceBet';


function App() {

  const [state, setState] = useState({ bet: {} })
  console.log(state)
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path={["/profile"]} component={Profile}>
              <Profile />
            </Route>
            <Route exact path={["/addbalance"]}>
              <AddBalance />
            </Route>
            <Route exact path={["/placebet"]}>
              <PlaceBet setState={setState} state={state} />
            </Route>
            <Route exact path={["/nfl"]}>
              <NFL setState={setState} state={state}/>
            </Route>
            <Route exact path={["/ncaa"]}>
              <NCAA  setState={setState} state={state}/>
            </Route>
            <Route exact path={["/mlb"]}>
              <MLB setState={setState} state={state} />
            </Route>
            <Route exact path={["/epl"]}>
              <EPL setState={setState} state={state} />
            </Route>
            <Route exact path={["/LALIGA"]}>
              <LALIGA setState={setState} state={state} />
            </Route>
            <Route exact path={["/BUNDESLIGA"]}>
              <BUNDESLIGA setState={setState} state={state} />
            </Route>
            <Route exact path={["/signin"]} component={SignUp} >
              <SignIn />
            </Route>
            <Route exact path={["/signup"]} component={SignUp}>
              <SignUp />
            </Route>

            <Route exact path={["/", "/home"]}>
              <Dashboard setState={setState} state={state} />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router >
    </div>

  );
}


export default App;

