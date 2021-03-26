import { Component } from "react";
import {motion} from 'framer-motion'
import './InfoBubble.css'

class InfoBubble extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    

    render() {
        return (
        <motion.div className={"bubble"}>
            <h1 className={"bubbleTitle"}>{this.props.title}</h1>
            <h3 className={"bubbleDescription"}>{this.props.description}</h3>
        </motion.div>)
    }
}

export default InfoBubble;