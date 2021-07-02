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

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawer: false
        };
    }

    toggleDrawer = () => {
        this.setState({
            drawer: !this.state.drawer
        });
    }

    logout = () => {
        // todo use authcontext logout method
        this.toggleDrawer();
    }

    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar style={{ display: "flex", justifyContent: "space-between"}}>
                        <IconButton color="inherit" onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            React Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.drawer}
                    onClose={this.toggleDrawer}
                    style={{ width: 600 }}
                >
                    <List>
                        <ListItem>
                            <Link to="/">
                                <Button color="secondary" onClick={this.logout}>
                                    <ExitToAppIcon /> Logout
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/dashboard">
                                <Button color="primary" onClick={this.toggleDrawer}>
                                    <DashboardIcon /> Dashboard
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/dashboard">
                                <Button color="primary" onClick={this.toggleDrawer}>
                                    <GroupWorkIcon /> Promos
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/Apprenants">
                                <Button color="primary" onClick={this.toggleDrawer}>
                                    <PeopleAltIcon /> Apprenants
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/formateurs">
                                <Button color="primary" onClick={this.toggleDrawer}>
                                    <SupervisorAccountIcon /> Formateurs
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/salles">
                                <Button color="primary" onClick={this.toggleDrawer}>
                                    <MeetingRoomIcon /> Salles
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}
export default withRouter(NavBar);