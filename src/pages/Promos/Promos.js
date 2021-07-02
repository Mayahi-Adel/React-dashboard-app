import React, {useState, useEffect, useContext} from 'react';
import {promoService} from '../../services';
import authContext from '../../store';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from '../../theme/partials.css';

const Promos = (props) => {
    const [promos, setPromos] = useState([]);
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);

    const classes = useStyles();

    useEffect (async () => {
        try{
            const response = await promoService.getAll();
            setPromos(response.data)
        } catch (error){
            setError(true)
        }
    }, []) // Il faut tjr faire attention au 2eme params de useEffect (le tableau [])

    const removePromo = (id) => {
        const promoUpdated = promos.filter((promo) => promo.id !== id);
        setPromos(promoUpdated);
    }

    const addPromo = () => {
        props.history.push("/add_promo");
    }

    const detailsPromo = (id) => {
        props.history.push("/details_promo/"+ id)
    }

    const listing_promo = promos.map((promo, i) => {
        return (
            <div key={i} className={classes.container__list}>
                <h4 onClick={(e) => detailsPromo(promo.id)}>{promo.name}</h4>
                <DeleteForeverIcon onClick={(e) => removePromo(promo.id)} color="secondary" fontSize="large"/>
            </div>
        )
    })

    

    return (
        <div className={classes.container}>
            {error && <p>Erreur serveur</p>}
            <div className={classes.container__top}>
                <h1>Liste des promos</h1>
                <div className={classes.add__promo} onClick={(e) => addPromo()}>
                    <AddCircleIcon color="primary" fontSize="large"/> 
                    <h3>Ajouter une promo</h3>
                </div>
            </div>
            {listing_promo}
        </div>
    )
}



export default Promos;