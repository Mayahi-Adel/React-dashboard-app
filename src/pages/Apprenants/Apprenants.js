import React, {useState, useEffect, useContext} from 'react'
import {apprenantService} from '../../services';
import authContext from '../../store';


const Apprenants = (props) => {
    const [apprenants, setApprenants] = useState([]);
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);

    useEffect (async () => {
        try{
            const response = await apprenantService.getAll();
            setApprenants(response.data)
        } catch (error){
            setError(true)
        }
    }, []) // Il faut tjr faire attention au 2eme params de useEffect (le tableau [])

    const listing_apprenant = apprenants.map((apprenant, i) => {
        return (
            <div key={i}>
                <h6>{apprenant.name}</h6>
            </div>
        )
    })

    return (
        <>
            {error && <p>Erreur serveur</p>}
            <h1>Welcome</h1>
            {listing_apprenant}
        </>
    )
}

export default Apprenants;