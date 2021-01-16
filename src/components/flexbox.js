import React from 'react'
import styled from 'styled-components'
import css from '../styles/flexbox.css'
import Hoverbox3 from '../hover3'
import Hoverbox from '../hover'
import Hoverbox2 from '../hover2'


    
export default function Flexbox2() {
    return (
<> 
        <div class="holdingcontainer" >
      
          
        <div class="internalcontainerL"> <Hoverbox/> </div>
  
        <div class="internalcontainerM"> <Hoverbox2/></div>
  
        <div class="internalcontainerR"> <Hoverbox3/> </div>
      </div>
      <br/>
      <br/>
      <br/>
      </>
  
    )
}
   

