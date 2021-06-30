import api from './api';

const reservationService = {
    getAll: async () => {
        return await api.get('/reservations');
    },
    getById: async (id) => {
        return await api.get('/reservations/' + id);
    }
    // other service method
}

export default reservationService;