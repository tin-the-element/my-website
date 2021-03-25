import { Component } from "react";
import {motion} from 'framer-motion'
import './ContactInfo.css'


class ContactInfo extends Component {
    constructor(props){
        super(props)
        this.state = {isHovered: false}
        this.toggleHover = this.toggleHover.bind(this)
    }

    LinkToSite = () => {
        window.location.href=this.props.link
      }

    toggleHover (){
        this.setState(prevState =>  ({isHovered: !prevState.isHovered}))
    }



    render() {
        console.log(this.isHovered)
        if (!this.state.isHovered) {
            return (
            <motion.div className={"ContactInfo"} onClick={this.LinkToSite} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <object type="image/svg+xml" data={this.props.image} className={"ContactInfoImg"} style={{pointerEvents:'none'}}>
                </object>
                <h1 className={"ContactInfoLink"}>{this.props.text}</h1>
            </motion.div>)
            
        } else {
            return ( 
            <motion.div className={this.props.class} onClick={this.LinkToSite} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <object type="image/svg+xml" data={this.props.secImage} className={"ContactInfoImg"} style={{pointerEvents:'none'}}>

                </object>
                <h1 className={"ContactInfoLink"}>{this.props.text}</h1>
            </motion.div>)
        }
    }
}

export default ContactInfo;