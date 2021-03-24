import { Component } from "react";
import {motion} from 'framer-motion'
import './Title.css'

class Title extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div>
            <h1>
                Tin Luu
            </h1>
            <h3>
                Student Web Assistant
            </h3>
            <h3 style={{fontWeight:"normal"}}>
                UCI Stem Cell Research Center
            </h3>
        </motion.div>)
    }
}

export default Title;