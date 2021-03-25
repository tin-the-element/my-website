
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  Switch,
  useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Pages/Navbar"
import Projects from "./Pages/Projects"
import PageNotFound from "./Pages/PageNotFound"
import React, {Component, useState } from "react";

function withMyHook(Component) {
  return function WrappedComponet(props) {
    const myHookValue = useLocation();
    return <Component{...props} myHookValue={myHookValue} />;
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    const location = this.props.myHookValue;
    return (
      <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location= {location} key={location.key}>
          <Route exact path="/"><About /></Route>
          <Route exact path="/Contact"><Contact /></Route>
          <Route exact path="/Projects"><Projects /></Route>
          <Route exact path="/PageNotFound"> <PageNotFound /> </Route>
          <useNavigate to="/PageNotFound" />
        </Switch>
      </AnimatePresence>
      </>
    )
  }
}

export default withMyHook(App);
