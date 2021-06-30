import api from './api';

const promoService = {
    getAll: async () => {
        return await api.get('/promos');
    },
    getById: async (id) => {
        return await api.get('/promos/' + id);
    }
    // other service method
}

export default promoService;