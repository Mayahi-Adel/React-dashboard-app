import React, {useState, useEffect, useContext} from 'react'
import {apprenantService} from '../../services';
import authContext from '../../store';
import AddCircleIcon from '@material-ui/icons/AddCircle';



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

    const detailsApprenant = (id) => {
        props.history.push('/apprenants/' + id)
    }


    const listing_apprenant = apprenants.map((apprenant) => {
        return (
            <div key={apprenant.id}>
                <h4 onClick={(e) => detailsApprenant(apprenant.id)}>{apprenant.firstname} {apprenant.lastname}</h4>
            </div>
        )
    })

    const addApprenant = () => {
        props.history.push("/add_apprenant");
    }

    return (
        <>
            {error && <p>Erreur serveur</p>}
            <h1>Welcome</h1>
            <AddCircleIcon onClick={(e) => addApprenant()} />
            {listing_apprenant}
        </>
    )
}

export default Apprenants;