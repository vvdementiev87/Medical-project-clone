import { axiosClassic } from '../api/interceptors';
import {getNormativesUrl} from '../config/api.config';

export const NormativesService = {
    async getAll(SearchTerm = null) {
        return axiosClassic
            .get(getNormativesUrl(''), {
                params: SearchTerm ? { SearchTerm } : {},
            })
            .then((res) => {
                const normatives = [];
                for (let i in res?.data) {
                    normatives.push(res?.data[i]);
                }
                return normatives;
            });
    },
    async getById(id) {
        return axiosClassic.get(getNormativesUrl(`/${id}`)).then((res) => {
            return res.data;
        });
    },
};
