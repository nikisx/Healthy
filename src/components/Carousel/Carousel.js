import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const AutoplaySlider = withAutoplay(AwesomeSlider);
        return (
           <AutoplaySlider  play={true}
           cancelOnInteraction={false} // should stop playing on user interaction
           interval={6000}  
           bullets={false}
           animation="cubeAnimation">
               <div data-src="https://i.ibb.co/S6z8yfv/1.jpg" />
               <div data-src="https://i.ibb.co/yg4sRTx/2.jpg" />

           </AutoplaySlider>
        );
    }
}

export default Carousel;