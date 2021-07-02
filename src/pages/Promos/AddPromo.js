import React, {useState, useEffect, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../../theme/forms.css';
import authContext from '../../store';
import {promoService} from '../../services';

const AddPromo = (props) => {

    const [promo, setPromo] = useState([]);
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);
    
    const handleClick = async (e) => {
        try {
            const response = await promoService.addOne(promo);
            props.history.push('/dashboard');

        } catch (error) {
            setError(true)
        }
    }
    
    const classes = useStyles();
    
    return (
        
        <div>
        {error && <p>Erreur serveur</p>}
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="promo"
                        onChange={(e) => setPromo(e.target.value)}
                    />
                    
                    <br />
                    <Button
                        variant="outlined" color="primary"
                        onClick={event => handleClick(event)}>
                        Ajouter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddPromo;
