import React, { Component } from 'react';

import {Carousel} from 'react-bootstrap'
import image4 from './photos/wye2.jpg'
import estuary from './estuary.jpg'
import l4 from './photos/l-4.jpg'
import s2 from './photos/shot-2.jpg'
import caddy from './photos/caddy.jpg'
import './App.css'

function SliderHome() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="slide"
            src={caddy}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="slide"
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="slide"
              src={estuary}
            alt="second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
              src={s2}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slide"
              src={l4}
            alt="fourth slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


)
}
export default SliderHome;
