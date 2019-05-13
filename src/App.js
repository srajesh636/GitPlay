import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Github from "./pages/Github";
import UserProfile from './pages/UserProfile';
import RepoDetails from './pages/RepoDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/github" component={Github} />
        <Route path="/user/:userId" component={UserProfile} />
        <Route path="/repo/:repoId" component={RepoDetails} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
