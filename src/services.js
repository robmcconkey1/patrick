import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Card1 from './card'
import SliderHome from './carousel'
import patrick from './profilephoto.jpg'
import xscape from './xscape.jpg'
import Footer from './footer'
import riba from './photos/RIBA+ARB+Logo.png'
import Grid from './components/sevicesgrid';
import ContactUs from './components/payment';
import Testimonials from './components/testimonials'
import Card from './components/card'


export const Services = () => (
  <div>
    <h1> Services </h1>
      <Grid/> 

      
      <ContactUs/> <br/><br/>
      
      
      <br/><br/>
    <Footer/>
                            
  </div>
            
)

/* <Testimonials/> 
<Card/>*/