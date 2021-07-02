import api from './api';

const apprenantService = {
    getAll: async () => {
        return await api.get('/apprenants');
    },
    getById: async (id) => {
        return await api.get('/apprenants/' + id);
    },
    // other service method
    addOne: async (firstname,lastname,promo_id) => {
        return await api.post('/apprenants/', {firstname, lastname, promo_id})
    },
    removeOne: async (id) => {
        return await api.delete('apprenants/' + id);
    }

}

export default apprenantService;