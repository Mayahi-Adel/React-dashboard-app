import React from 'react';
import useStyles from '../../theme/partials.css';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer} >
            <p className={classes.text}>@copyright 2021</p>
        </footer>
    )
}

export default Footer;