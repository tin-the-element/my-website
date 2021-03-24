import { Component } from "react";
import {motion} from 'framer-motion'
import "./ClickableNames.css"
import {Link} from 'react-router-dom'

class ClickableNames extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
        <motion.div>
            <ul>
                <Link to = "/Contact"><li>Contact</li></Link>
                <Link to = "/Projects"><li>Projects</li></Link>
                <Link to = "/"><li>About</li></Link>

            </ul>
        </motion.div>)
    }
}

export default ClickableNames;