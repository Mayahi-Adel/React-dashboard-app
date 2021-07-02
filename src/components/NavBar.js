import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Drawer,
    List,
    ListItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link, withRouter } from "react-router-dom";
import appContext from '../store';
import useStyles from '../theme/partials.css';

const NavBar = (props) => {

    const classes = useStyles();

    const store = React.useContext(appContext);

    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

    const logout = () => {

        localStorage.removeItem('token');
        store.setIsAuth(false);
        props.history.push('/');
        toggleDrawer();
    }


    return (
        <div>
            {store.isAuth && 
                <AppBar position="static" >
                    <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
                        <IconButton color="inherit" onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            React Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
            }
            
            <Drawer
                open={drawer}
                onClose={toggleDrawer}
                style={{ width: 600 }}
            >
                <List>
                    <ListItem>
                        <Link to="/" className={classes.margin}>
                            <Button variant="contained" color="secondary" onClick={logout} className={classes.button}>
                                <ExitToAppIcon /> Logout
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/dashboard" className={classes.margin}>
                            <Button variant="contained" color="primary" onClick={toggleDrawer} className={classes.button}>
                                <DashboardIcon /> Dashboard
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/promos" className={classes.margin}>
                            <Button variant="contained" color="primary" onClick={toggleDrawer} className={classes.button}>
                                <GroupWorkIcon /> Promos
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Apprenants" className={classes.margin}>
                            <Button variant="contained" color="primary" onClick={toggleDrawer} className={classes.button}>
                                <PeopleAltIcon /> Apprenants
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/formateurs" className={classes.margin}>
                            <Button variant="contained" color="primary" onClick={toggleDrawer} className={classes.button}>
                                <SupervisorAccountIcon /> Formateurs
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/salles" className={classes.margin}>
                            <Button variant="contained" color="primary" onClick={toggleDrawer} className={classes.button} >
                                <MeetingRoomIcon /> Salles
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );

}
// class NavBar extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             drawer: false
//         };
//     }

//     toggleDrawer = () => {
//         this.setState({
//             drawer: !this.state.drawer
//         });
//     }

//     logout = () => {
//         // todo use authcontext logout method
//         this.toggleDrawer();
//     }



//     render() {
//         return (
//             <div>
//                 <AppBar position="static" >
//                     <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
//                         <IconButton color="inherit" onClick={this.toggleDrawer}>
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6">
//                             React Dashboard
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer
//                     open={this.state.drawer}
//                     onClose={this.toggleDrawer}
//                     style={{ width: 600 }}
//                 >
//                     <List>
//                         <ListItem>
//                             <Link to="/">
//                                 <Button color="secondary" onClick={this.logout}>
//                                     <ExitToAppIcon /> Logout
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                         <ListItem>
//                             <Link to="/dashboard">
//                                 <Button color="primary" onClick={this.toggleDrawer}>
//                                     <DashboardIcon /> Dashboard
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                         <ListItem>
//                             <Link to="/dashboard">
//                                 <Button color="primary" onClick={this.toggleDrawer}>
//                                     <GroupWorkIcon /> Promos
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                         <ListItem>
//                             <Link to="/Apprenants">
//                                 <Button color="primary" onClick={this.toggleDrawer}>
//                                     <PeopleAltIcon /> Apprenants
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                         <ListItem>
//                             <Link to="/formateurs">
//                                 <Button color="primary" onClick={this.toggleDrawer}>
//                                     <SupervisorAccountIcon /> Formateurs
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                         <ListItem>
//                             <Link to="/salles">
//                                 <Button color="primary" onClick={this.toggleDrawer}>
//                                     <MeetingRoomIcon /> Salles
//                                 </Button>
//                             </Link>
//                         </ListItem>
//                     </List>
//                 </Drawer>
//             </div>
//         );
//     }
// }
export default withRouter(NavBar);