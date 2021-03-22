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
            <AutoplaySlider 
            className="carousel"
            play={true}
           cancelOnInteraction={false} // should stop playing on user interaction
           interval={6000}  
           bullets={false}
           animation="cubeAnimation">
               <div data-src="/imgs/test-image.gif"/>
               <div data-src="/imgs/image4.gif"/>


           </AutoplaySlider>
        );
    }
}

export default Carousel;