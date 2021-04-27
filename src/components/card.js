import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import '../styles/gallarycard.css'
import '../App.css'
import canterbury from '../photos/lawrence8-2.jpg'
import school from '../photos/l.jpg'
import scans from '../photos/scan1.jpg'


function Card(props) {
    console.log(props)
    return (
        <div class= 'card'>
    <h3>{props.name}</h3> <br/><br/>
    {props.intro}
    <img className = 'blogimage' src= {props.imageSource}/>
    <button className= ".card Button"> Find out more</button>
    
        </div>
    )
  }

  export default function London() {
    return (
        <div>

            <h1 className= 'blogparagraph'> Gallery</h1> <br/><br/><br/>


                <div className= ''> </div> 
            <div className = 'grid'>
            
          <Card name="Residential" intro= "House in canterbury" imageSource= {canterbury} />
          <Card name="Schools" intro= "School projects" imageSource= {school} />
          <Card name="Scans" intro= "A collection of scans" imageSource= {scans} />
          
          </div>
       </div>

     
    )}

/*
function London() {
    return (
        <div> <h1> London </h1>
        <div className = 'grid'>
            
            <h3> Notting Hill </h3>
            <h3> Central </h3>
            <h3> Shoreditch </h3>
        </div>
        </div>
    )
*/


