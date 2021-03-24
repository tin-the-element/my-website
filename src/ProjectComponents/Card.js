import { Component } from "react";
import {motion} from 'framer-motion'
import './Card.css'

class Card extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div className={"card"}>
            <img className={"classImg"} src={this.props.image} alt={this.props.title}></img>
            <div className={"container"}>
                <h4><b>{this.props.title}</b></h4>
                <p>{this.props.description}</p>
                <p>Languages/Frameworks Used: {this.props.languages}</p>
            </div>
        </motion.div>)
    }
}

export default Card;