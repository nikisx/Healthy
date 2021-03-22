import React, { Component } from 'react';
import './Heading .css'

class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h1 className="title">{this.props.children}</h1>
         );
    }
}
 
export default Heading;