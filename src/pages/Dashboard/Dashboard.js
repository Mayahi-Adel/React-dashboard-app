import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: '3%',
      
    },
    gridList: {
      width: '60%',
      
    },
    home__contain: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    }
  }));

const Dashboard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
            
            <GridListTile key={1} cols={2}>
                <div className={classes.home__contain} > <h1>Welcom to React Dashbord</h1> 
                <HomeIcon style={{ fontSize: 100 }}/>
                </div>
            </GridListTile>
            <GridListTile key={2} cols={1}>
                <img src="https://material-ui.com/static/images/grid-list/bike.jpg" alt="title" />
            </GridListTile>
            <GridListTile key={3} cols={1}>
                <img src="https://material-ui.com/static/images/grid-list/bike.jpg" alt="title" />
            </GridListTile>
            <GridListTile key={4} cols={1}>
                <img src="https://material-ui.com/static/images/grid-list/bike.jpg" alt="title" />
            </GridListTile>
            <GridListTile key={5} cols={1}>
                <img src="https://material-ui.com/static/images/grid-list/bike.jpg" alt="title" />
            </GridListTile>
            
            
        </GridList>
    </div>
    )
}

export default Dashboard