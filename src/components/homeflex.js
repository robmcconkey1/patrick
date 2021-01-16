
import React, {Component} from 'react'
import Hoverbox from '../hover';
import Cardtest from './cardfeature';
import Flexbox2 from './flexbox';
import '../styles/hover.css'

const Cards = props => {
    console.log(props)
    return (
    <div className = 'fonts'> 
        <h1> {props.name}</h1>
        <p> {props.info} </p>
        <button> {props.button} </button>
        {props.children}
    </div>
    )
}  

class Homeflex extends Component {
    render() {
        return (
            <div class="holdingcontainertest"> 
           
                <div className= 'internalcontainerLtest'  >
                <Cards name ='Sevenoaks' />
                 <Cards /*info ='Built in the 17th Century' *//>
                <Cards> Project 1</Cards> 
                </div>
                <div className= 'internalcontainerMtest' >
                <Cards name ='London' />
                <Cards /*info ='Built in the 17th Century' *//>
                <Cards> <button> Project 2 </button></Cards> 
                </div>
                <div className= 'internalcontainerRtest' >
                <Cards name ='Canterbury' />
                <Cards /*info ='Built in the 17th Century' *//>
                <Cards> <button> Project 3 </button></Cards> 
                </div>
                
            </div>
        ) 
}
}
export default Homeflex;