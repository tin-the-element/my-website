import { Component } from "react";
import {motion} from 'framer-motion'
import ColorSelector from '../NavbarComponents/ColorSelector'
import ClickableNames from '../NavbarComponents/ClickableNames'
import "./Navbar.css" 

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div className={"Navbar"}>
            <ColorSelector />
            <ClickableNames />
            
        </motion.div>)
    }
}

export default Navbar;