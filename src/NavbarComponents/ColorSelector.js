import { Component } from "react";
import {motion} from 'framer-motion'
import "./ColorSelector.css"

class ColorSelector extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    changeLight() {
        
    }

    render() {
        return (
        <motion.div>
            <span id={"Light"} className={"Circle"}></span>
            <span id={"Dark"} className={"Circle"}></span>
            <span id={"Pink"} className={"Circle"}></span>
            <span id={"Blue"} className={"Circle"}></span>
            <span id={"idk"} className={"Circle"}></span>
        </motion.div>)
    }
}

export default ColorSelector;