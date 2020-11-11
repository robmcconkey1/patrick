import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import styled from 'styled-components';
import wye from './photos/wye2.jpg'
import l1 from './photos/l.jpg'
import l2 from './photos/langton-2.jpg'
import l3 from './photos/l-3.jpg'
import l4 from './photos/l-4.jpg'
import shot from './photos/shot.jpg'
import shot2 from './photos/shot-2.jpg'
import shot3 from './photos/shot-3.jpg'
import shot4 from './photos/shot-4.jpg'
import shot5 from './photos/shot-5.jpg'
import shot6 from './photos/shot-6.jpg'
import caddy from './photos/caddy.jpg'
import caddy2 from './photos/caddy-2.jpg'
import caddy3 from './photos/caddy-3.jpg'
import sketch1 from './photos/road.jpg'
import sketch2 from './photos/06.jpg'
import wye2 from './photos/wye4.jpg'
import l5 from './photos/gallery1.jpg'
import caddy4 from './photos/gallery1-2.jpg'

const Container = styled.div`
  // border: solid 12px green;
  .test123  {
    column-count: 1;
    @media (max-width: 800px) {
      border: dashed 6px purple;
      column-count: 1;


    }
  }
`;




const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: 10,



  },

  gridList: {
    border: 'solid 1px red',




  }



}));



/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const tileData = [
   {
     img: caddy,
        title: 'xscape',
     cols: 1,

   },
   {
     img: caddy2,
        title: 'xscape',
     cols: 1,

   },
   {
     img: caddy3,
        title: 'xscape',
     cols: 1,

   },
   {
     img: caddy4,
        title: 'xscape',
     cols: 1,

   },
   {
     img: wye,
        title: 'xscape',
     cols: 1,


   },
   {
     img: wye2,
        title: 'xscape',
     cols: 1,

   },


   {
     img: shot2,
        title: 'xscape',
     cols: 1,
   },

   {
     img: shot3,
        title: 'xscape',
     cols: 1,

   },
   {
     img: l3,
        title: 'l3',
     cols: 1,

   },


   {
     img: l5,
        title: 'xscape',
     cols: 1,

   },
   {
     img: shot4,
        title: 'l1',
     cols: 1,

   },
   {
     img: shot5,
        title: 'l1',
     cols: 1,

   },
   {
     img: shot6,
        title: 'l1',
     cols: 1,

   },

   {
     img: sketch1,
        title: 'xscape',
     cols: 1,

   },

   {
     img: sketch2,
        title: 'xscape',
     cols: 1,

   },


 ]
export default function ImageGridList() {
  const classes = useStyles();

  return (
<Container>
    <div className={classes.root}>
      <GridList cellHeight={360} cellWidth={100} className="test123"  >
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>

    </div>
    </Container>
  );
}
