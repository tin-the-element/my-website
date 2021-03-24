import { Component } from "react";
import {motion} from 'framer-motion'
import './Card.css'


class Card extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    LinkToSite = () => {
        window.location.href=this.props.website
      }



    render() {
        return (
        <motion.div className={"card"} onClick={this.LinkToSite}>
            <img className={"classImg"} src={this.props.image} alt={this.props.title}></img>
            <div className={"container"}>
                <h4 className={"cardTitle"}><b>{this.props.title}</b></h4>
                <p>{this.props.description}</p>
                <p className={"cardLanguages"}>Languages/Frameworks Used: {this.props.languages}</p>
            </div>
        </motion.div>)
    }
}

export default Card;