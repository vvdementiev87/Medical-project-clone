import { axiosClassic } from '../api/interceptors';
import { getConferenciesUrl } from '../config/api.config';

export const ConferenciesService = {
    async getAll(SearchTerm = null) {
        return axiosClassic.get(getConferenciesUrl(''), {
            params: SearchTerm ? { SearchTerm } : {},
        }).then((res)=>{
            const conferencies=[]
            for (let i in res?.data) {
                conferencies.push(res?.data[i]);
            }
            return conferencies
        });
    },
};
