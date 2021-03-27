import { Component } from "react";
import {motion} from 'framer-motion'
import './HorizontalCard.css'


class HorizontalCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }




    render() {
        return (
        <motion.div className={"Horicard"}>
            <img className={"HoricardImg"} src={this.props.image} alt={this.props.title}></img>
            <div className={"container"}>
                <h4 className={"HoricardPosition"}><b>{this.props.position}</b></h4>
                <h6 className={"HoricardCompany"}>{this.props.company}</h6>
                <p className={"HoricardDate"}>{this.props.date}</p>
                <ul>
                    <li className={"HoricardBullet"}>{this.props.first_bullet}</li>
                    <li className={"HoricardBullet"}>{this.props.second_bullet}</li>
                    <li className={"HoricardBullet"}>{this.props.third_bullet}</li>
                </ul>
                
            </div>
        </motion.div>)
    }
}

export default HorizontalCard;