import { axiosClassic } from '../api/interceptors';
import { getConferenciesUrl } from '../config/api.config';

export const ConferenciesService = {
    async getFutureEvents(SearchTerm = null) {
        return axiosClassic.get(getConferenciesUrl(''), {
            params: SearchTerm ? { SearchTerm } : {},
        }).then((res)=>{
            let futureArray=[];
            if(res?.data){
                console.log(res?.data)
                futureArray=res?.data['future'];
            }
            return futureArray;
        });
    },
};
