import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import london1 from './travel4.jpg';


const Styles = styled.div`
.Jumbo {
background: url(${london1}) no-repeat fixed bottom;
background-size: cover;
color: #F0F8FF;
height: 430px;
position: relative;
z-index: 0;
}

.overlay {
  background-colour:#000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  z-index: -1;
  object-fit: cover;

}
`

export const Jumbotron = () => (
  <Styles>
  <Jumbo fluid className="Jumbo">
  <div classname="overlay"></div>
  <Container>
  <h1> McConkey Architects </h1>

    </Container>
    </Jumbo>
    </Styles>
)
