import React, {useState, useEffect, useContext} from 'react';
import {promoService} from '../../services';
import authContext from '../../store';

const Dashboard = (props) => {
    const [promos, setPromos] = useState([]);
    const [error, setError] = useState(false);
    const authStore = useContext(authContext);
    console.log(authStore);

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

    const listing_promo = promos.map((promo, i) => {
        return (
            <div key={i} onClick={(e) => removePromo(promo.id)}>
                <h6>{promo.name}</h6>
            </div>
        )
    })

    return (
        <>
            {error && <p>Erreur serveur</p>}
            <h1>Welcome</h1>
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