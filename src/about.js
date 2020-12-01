import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Card1 from './card'
import SliderHome from './carousel'
import patrick from './profilephoto.jpg'
import xscape from './xscape.jpg'
import riba from './photos/RIBA+ARB+Logo.png'
import {Footer} from './footer'



export const About = () => (
  <div>
  <div ClassName='.myNavbar'>

<h1> About </h1>
<br/>

   </div>
<div class="headshot" >
<img class="headshot_image" src={patrick} alt="headshot" />
</div>

<h2 class= "about"> Patrick McConkey graduated from the Kent Institute of Art and Design, School of Architecture,
with a CDP distinction, in 1990. As a chartered architect he has designed a number of high profile
projects and has practised in London, Paris and Cape Town. Winner of several architectural
competitions and the recipient of a Civic Trust Design Award he has tutored at 3 schools of
architecture in the UK and Ireland and has had articles published in Architecture Today and
Building Design. He has also exhibited at The Royal Institute of British Architects - Designing for
Doctors. Patrick established mcconkey architects in 2020. </h2>


<br/>

<h1> Services </h1>

<br/>
<h2 class= "about"> Coming Soon </h2>


<br/>
<div class="riba" >
<img class="riba" src={riba} alt="headshot" />
<Footer/>
 </div>
 </div>


)
