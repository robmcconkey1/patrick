import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import shanghai from './resize1.1-6.jpg'




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 400,
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
     img: shanghai,
        title: 'paris',
     cols: 1,

   }

 ]
 function ImageGridList() {
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
 export default ImageGridList
