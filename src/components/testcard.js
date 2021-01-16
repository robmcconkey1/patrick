import React, {Component} from 'react'

function Welcome(props) {
    console.log(props)
    return (
        <>
    <h1>Hello, {props.name}</h1>
    <h2> You're from {props.town}</h2>
    
        </>
    )
  }

  export default function App2() {
    return (
            <div className = 'wrapper'>
          <Welcome name="Sara" town= "Rye" />
          </div>
       
    )}

