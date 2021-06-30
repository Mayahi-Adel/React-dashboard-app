import React, {useState, useEffect, useContext} from 'react';
import {promoService} from '../../services';
import authContext from '../../store';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './dashboard.scss';

const Dashboard = (props) => {
    const [promos, setPromos] = useState([]);
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);
    //console.log(authStore);

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

    const listing_promo = promos.map((promo, i) => {
        return (
            <div key={i} className="promo__list">
                <h6>{promo.name}</h6>
                <DeleteForeverIcon onClick={(e) => removePromo(promo.id)}/>
            </div>
        )
    })

    return (
        <>
            {error && <p>Erreur serveur</p>}
            <h1>Welcome</h1>
            <AddCircleIcon onClick={(e) => addPromo()} />
            {listing_promo}
        </>
    )
}

// class Dashboard extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             error: null
//         };
//     }

//     render() {
        
//         return (
//             <>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <h1>Welcome !</h1>
//             </>
//         )
//     }
// }

export default Dashboard;