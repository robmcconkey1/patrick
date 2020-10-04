import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import xscape from './xscape.jpg'
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  gridList: {
    width: 1500,
    height: 2000,
  },
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
     img: xscape,
        title: 'xscape',
     cols: 1,

   },
   {
     img: l3,
        title: 'l3',
     cols: 2,

   },




   {
     img: shot2,
        title: 'xscape',
     cols: 3,
   },
   {
     img: shot3,
        title: 'l4',
     cols: 1,

   },
   {
     img: shot,
        title: 'xscape',
     cols: 1,

   },
   {
     img: l1,
        title: 'l1',
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

 ]
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} cellWidth={1000} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 2}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
