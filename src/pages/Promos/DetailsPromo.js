import React, {useState, useEffect, useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../../theme/forms.css';
import authContext from '../../store';
import {promoService} from '../../services';

const DetailsPromo = (props) => {

    const [promo, setPromo] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const authStore = useContext(authContext);
    
    //const id = props.location.pathname.split('/')[2]; // match.params.id
    
    //console.log(id)

    useEffect ( async() => {
        const id = props.match.params.id;
        try {
            const response = await promoService.getById(id);
            setPromo(response.data);
            setLoading(false);
        } catch (error) {
            setError(true)
        }
    },[])

    // const listing_details = promo.map((detail, i) => {
    //     return (
    //         <div key={i} className="promo__detail">
    //             <h4> Formateurs : {promo.promo_formateurs[0].name}</h4>
    //             <h4> Apprenants : {promo.Apprenants[0].name}</h4>
    //         </div>
    //     )
    // })
    
    const classes = useStyles();
    
    return (
        <>
        
            {!loading && 
                <div>
                    <h2>{promo.name}</h2>
                    <div className="promo__detail">
                        <h3>Fromateurs</h3>

                        {promo.promo_formateurs.map((formateur) => 
                            <h4 key={formateur.id}>{formateur.firstname} {formateur.lastname}</h4> 
                        )}

                        <h3>Apprenants </h3>
                        {promo.Apprenants.map((apprenant) => 
                            <div key={apprenant.id} >
                                <h4>{apprenant.firstname} {apprenant.lastname}</h4>
                            </div>
                        )}
                       
                    </div>
                </div>
            }
        </>
        
        
    )
}

export default DetailsPromo;
