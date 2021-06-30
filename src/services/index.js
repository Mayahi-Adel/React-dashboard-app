import apprenantService from './apprenant';
import formateurService from './formateur';
import promoService from './promo';
import reservationService from './reservation';
import salleService from './salle';

import api from './api';

const login = async (username, password) => {
    return await api.post('/admin/auth', {username, password});
}

export {login, apprenantService, formateurService, promoService, reservationService, salleService};