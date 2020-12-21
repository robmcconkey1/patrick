import React from "react";
import Riba from './riba'
import styled from 'styled-components'
import riba from '../src/photos/RIBA+ARB+Logo.png'
import './App.css'


const Container = styled.footer`
  margin-top: 10rem;
  padding: 1rem;
  background-color: #89A84F;
  bottom: 0;
  left: 0;
  width: 10%;
}
  
`;



export default function Footer() {
    return (
<div>
    <div> <img src={riba} width= '300px'/> </div>
    <p class = "footer"> Contact number: +447703356710   <br/> info@mcconkeyarchitects.co.uk </p>
    </div>
 
    )
}

