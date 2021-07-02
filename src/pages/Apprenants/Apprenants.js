import React, {useState, useEffect, useContext} from 'react'
import {apprenantService} from '../../services';
import authContext from '../../store';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import useStyles from '../../theme/partials.css';


const Apprenants = (props) => {
    const [apprenants, setApprenants] = useState([]);
    const [error, setError] = useState(false);

    const authStore = useContext(authContext);

    const classes = useStyles();

    useEffect (async () => {
        try{
            const response = await apprenantService.getAll();
            setApprenants(response.data)
        } catch (error){
            setError(true)
        }
    }, []) // Il faut tjr faire attention au 2eme params de useEffect (le tableau [])

    const detailsApprenant = (id) => {
        props.history.push('/apprenants/' + id)
    }


    const listing_apprenant = apprenants.map((apprenant) => {
        return (
            <div key={apprenant.id} className={classes.container__list}>
                <h4 onClick={(e) => detailsApprenant(apprenant.id)}>{apprenant.firstname} {apprenant.lastname}</h4>
            </div>
        )
    })

    const addApprenant = () => {
        props.history.push("/add_apprenant");
    }

    return (
        <div className={classes.container}>
            {error && <p>Erreur serveur</p>}
            <div className={classes.container__top}>
                <h1>Liste des apprenants</h1>
                <div className={classes.add__promo} onClick={(e) => addApprenant()}>
                    <AddCircleIcon color="primary" fontSize="large" />
                    <h3>Ajouter un apprenant</h3>
                </div>  
            </div>
            
            {listing_apprenant}
        </div>
    )
}

export default Apprenants;