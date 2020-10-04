import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import xscape from './xscape.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',

  },
  gridList: {
    width: 1500,
    height: 1050,
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
     img: xscape,
        title: 'xscape',
     cols: 1,

   },
   {
     img: xscape,
        title: 'xscape',
     cols: 1,

   },
   {
     img: xscape,
        title: 'xscape',
     cols: 2,

   },
   {
     img: xscape,
        title: 'xscape',
     cols: 1,

   },{
     img: xscape,
        title: 'xscape',
     cols: 2,
   },
   {
     img: xscape,
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
