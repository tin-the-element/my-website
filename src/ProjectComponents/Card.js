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
            <img className={"classImg1"} src={this.props.image1} alt={this.props.title}></img>
            <img className={"classImg2"} src={this.props.image2} alt={this.props.title}></img>
            <img className={"classImg3"} src={this.props.image3} alt={this.props.title}></img>
            <div className={"container"}>
                <h4 className={"cardTitle"}><b>{this.props.title}</b></h4>
                <p className={"cardDescription"}>{this.props.description}</p>
                <p className={"cardLanguages"}><b>Languages/Frameworks Used: {this.props.languages}</b></p>
            </div>
        </motion.div>)
    }
}

export default Card;