import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import image4 from './resize1.1-6.jpg'
import nyc from './3.jpg'
import japan from './resize3.1.jpg'

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
              src={nyc}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
              src={japan}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)
}
export default SliderHome;
