import React, {useState, useEffect, useContext} from 'react';
import { Button, TextField, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import useStyles from '../../theme/forms.css';
import authContext from '../../store';
import {apprenantService, promoService} from '../../services';

const AddApprenant = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [promos, setPromos] = useState([]);
    const [promoId, setPromoId] = useState("")
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);


    useEffect (async () => {
        try{
            const response = await promoService.getAll();
            setPromos(response.data)
        } catch (error){
            setError(true)
        }
    }, [])

    const handleClick = async (e) => {
        console.log(firstname, lastname, promoId);

        try {
            const response = await apprenantService.addOne (firstname, lastname,promoId);
            props.history.push('/Apprenants')

        } catch (error) {
            setError(true)
        }

    }

    const listing_promo = promos.map((promo, i) => {
        return (
                <MenuItem key={i} value={promo.id}>{promo.name}</MenuItem>
        )
    })


    const classes = useStyles(); 

    return (
        <div>
        {error && <p>Erreur serveur</p>}
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <br />
                    <TextField
                        className="input"
                        label="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <br />
                    <InputLabel id="promo-id">Promo</InputLabel>
                    <Select
                        className="select"
                        labelId="promo-id"
                        value={promoId}
                        onChange={(e) => setPromoId(e.target.value)}
                        >
                        {promos.map((promo, i) => 
                            <MenuItem key={i} value={promo.id}>{promo.name}</MenuItem>
                        )}
                        
                    </Select>
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

export default AddApprenant;