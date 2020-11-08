import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import Card1 from './card'
import SliderHome from './carousel'
import patrick from './profilephoto.jpg'
import riba from './photos/RIBA+ARB+Logo.png'
import {Footer} from './footer'


export const Travel = () => (
  <div>
  <div ClassName='.myNavbar'>


   </div>



<h1> Contact information  </h1>
<p>
<br/>
<br/>

For enquiries please email

<a href="mailto:info@mcconkeyarchitects.co.uk "> info@mcconkeyarchitects.co.uk </a>
<br/>
<br/>
<a>Contact number: +447703356710 </a>
<br/>
<br/>
<a href="https://www.linkedin.com/in/patrick-mcconkey-91aa2940/?originalSubdomain=uk"> LinkedIn </a>
<br/>
<br/>
<a href="https://www.linkedin.com/in/patrick-mcconkey-91aa2940/?originalSubdomain=uk"> Instagram </a>
<br/>
<br/>


<br/>
<br/>
<div class="riba" >
<img class="riba" src={riba} alt="headshot" />

 </div>
</p>

<Footer/>
 </div>

)
