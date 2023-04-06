import { axiosClassic } from '../api/interceptors';
import { getCentersUrl } from '../config/api.config';

export const CentersService = {
    async getAll(SearchTerm = null) {
        return axiosClassic
            .get(getCentersUrl(''), {
                params: SearchTerm ? { SearchTerm } : {},
            })
            .then((res) => {
                const centers = [];
                for (let i in res?.data) {
                    centers.push(res?.data[i]);
                }
                return centers;
            })
    },
    async getById(id) {
        return axiosClassic.get(getCentersUrl(`/${id}`)).then((res) => {
            return res.data;
        });
    },
};
