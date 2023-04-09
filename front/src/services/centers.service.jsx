import { axiosClassic } from '../api/interceptors';
import {getCentersCategoriesUrl, getCentersUrl, getCenterUrl} from '../config/api.config';

export const CentersService = {
    async getAll(SearchTerm = null) {
        return axiosClassic
            .get(getCentersUrl(), {
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
        return axiosClassic.get(getCenterUrl(`/${id}`)).then((res) => {
            return res.data;
        });
    },
    async getCentersAndCategories(SearchTerm = null) {
        return axiosClassic
            .get(getCentersCategoriesUrl(), {
                params: SearchTerm ? { SearchTerm } : {},
            })
            .then((res) => {
                let centers = [];
                let categories = [];
                for (let i in res?.data) {
                    centers=res?.data['community_centers'];
                    categories=res?.data['categories'];
                }
                return {categories,centers};
            })
    },
};
