import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import image4 from './xscape.jpg'
import estuary from './estuary.jpg'
import home from './home.jpg'

import './App.css'

function SliderHome() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className=""
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={estuary}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={home}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default SliderHome;
