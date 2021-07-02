import api from './api';

const promoService = {
    getAll: async () => {
        return await api.get('/promos');
    },
    getById: async (id) => {
        return await api.get('/promos/' + id);
    },
    // other service method
    addOne: async (name) => {
        return await api.post('/promos', {name})
    }
}

export default promoService;