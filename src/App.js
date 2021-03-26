
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
    return <Component{...props} myHookValue={myHookValue}/>;
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {theme:'linear-gradient(90deg, rgba(221,223,223,1) 36%, rgba(255,255,255,1) 80%)', nav_theme:'NavDark'}
    this.nav_theme = {theme: 'NavLight'}
    this.setColor = this.setColor.bind(this)
  }

  componentDidMount() {
    document.getElementById("Light").classList.add("SelectedDark")
  }

  setColor(id, color, nav_color){
   this.setState({theme: color})
   this.setState({nav_theme: nav_color})
   var x = document.getElementsByClassName("Circle")
   for (var value of x){ 
      if (value.classList.contains("SelectedDark")) {
        value.classList.remove("SelectedDark")
      }

      if (value.classList.contains("SelectedLight")) {
        value.classList.remove("SelectedLight")
      }
   }
   if (nav_color === "NavLight") {
    document.getElementById(id).classList.add("SelectedLight")
   } else{
    document.getElementById(id).classList.add("SelectedDark")
   }
   
  };






  render() {
    const location = this.props.myHookValue;
    const { theme } = this.state
    const { nav_theme} = this.state
    document.body.style.background = theme;
    return (
      <div className={nav_theme}>
      <>
        <div className={"Navbar"}>
            <div>
                <span id={"Light"} onClick={() => this.setColor('Light', 'linear-gradient(90deg, rgba(221,223,223,1) 36%, rgba(255,255,255,1) 80%)', 'NavDark')} className={"Circle CircleDark"}></span>
                <span id={"Dark"} onClick={() => this.setColor('Dark', 'linear-gradient(90deg, rgba(0,0,0,1) 36%, rgba(45,45,45,1) 80%)', 'NavLight')} className={"Circle CircleLight"}></span>
                <span id={"Pink"} onClick={() => this.setColor('Pink', 'linear-gradient(90deg, rgba(194,131,198,1) 36%, rgba(247,201,242,1) 80%)', 'NavDark')} className={"Circle CircleDark"}></span>
                <span id={"Blue"} onClick={() => this.setColor('Blue', 'linear-gradient(90deg, rgba(61,79,240,1) 36%, rgba(94,145,245,1) 80%)', 'NavLight')} className={"Circle CircleLight"}></span>
                <span id={"idk"} onClick={() => this.setColor('idk', 'linear-gradient(90deg, rgba(35,15,73,1) 36%, rgba(86,13,163,1) 80%)', 'NavLight')} className={"Circle CircleLight"}></span>
            </div>
            <div>
              <ul >
                  <Link to = "/Contact"><li className={nav_theme}>Contact</li></Link>
                  <Link to = "/Projects"><li className={nav_theme}>Projects</li></Link>
                  <Link to = "/"><li className={nav_theme}>About</li></Link>

              </ul>
          </div>
            
        </div>
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
      </div>
    )
}
}


export default withMyHook(App);
