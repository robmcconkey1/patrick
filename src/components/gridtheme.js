import React from 'react'
import '../styles/grid.css'
import '../App.css'
import patrick from '../profilephoto.jpg'

export default function gridAbout() {
    return (
        <div > 
        <div class= 'wrapper'> 
        <div class= 'copy' > Patrick McConkey graduated from the Kent Institute of Art and Design, School of Architecture,
            with a CDP distinction, in 1990. As a chartered architect he has designed a number of high profile
            projects and has practised in London, Paris and Cape Town. Winner of several architectural
            competitions and the recipient of a Civic Trust Design Award he has tutored at 3 schools of
             architecture in the UK and Ireland and has had articles published in Architecture Today and
             Building Design. He has also exhibited at The Royal Institute of British Architects - Designing for
             Doctors. Patrick established mcconkey architects in 2020 and is a hands on, design led practice committed to providing innovative building solutions, from prestigious bespoke residential commissions to large scale masterplans for schools and universities. Working from the Canterbury studio the team produce award winning architecture for their valued clients primarily in London and South East England. </div>
           
             <div>  <img src={patrick}/></div> 
             
        </div>
        </div>
    )
}
/* dfdfdf */ 