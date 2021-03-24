import { Component } from "react";
import {motion} from 'framer-motion'


class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div>
            <h1>Contact</h1>
        </motion.div>)
    }
}

export default Contact;