import React from 'react';
import styled from 'styled-components'


const style = {

  backgroundColor: "#89A84F",
  width: "100%"
}

var style2 = {
    backgroundColor: "#89A84F",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer2({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            <p class = "footerleft"> Contact number: +447703356710   <br/> info@mcconkeyarchitects.co.uk </p>
                { children }
            </div>
        </div>
    )
}

export default Footer2

