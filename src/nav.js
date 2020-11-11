import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
export default Navbars;




function Navbars() {
  const newNav = () => {
  console.log("Howdi");
}
  return (

        <div ClassName='.myNavbar'>
        <nav id="mainMenu">

<ul>
 <li><a href="src/index.js" >Home</a></li>
 <li><a href="src/travel.js" >Travel</a></li>
</ul>
</nav>
         </div>

  )
}
<div>
    <div className={classes.root}>
      <GridList cellHeight={360} cellWidth={100} className= "classes.gridList" cols={2}  className= "classes.gridList2" cols={1} >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>

    </div>
    </div>
