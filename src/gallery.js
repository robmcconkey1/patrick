import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Card1 from './card'
import SliderHome from './carousel'
import patrick from './profilephoto.jpg'
import ImageGridList from './gridlist.js'
import Footer from './footer'
import {TestPage} from './newgallery.js'
import {Feature} from './featuredgallery.js'

export const Gallery = () => (
  <main>
    <TestPage/>

    <br/><br/><p> Recent project - Canterbury, Kent </p> <br/><br/><br/>
    <Feature/>
    <Footer/>
  </main>
);
