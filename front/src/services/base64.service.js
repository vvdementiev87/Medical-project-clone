import {axiosClassic} from "../api/interceptors";
import {getNewsUrl} from "../config/api.config";
import axios from "axios";

export const base64 = {
    async getBase64(cb1,cb2) {
        let document = "";
        let reader = new FileReader();
        const fileData= await axios.get(`/testDocs/statute2022.pdf`, {
            responseType: 'blob',
        })
        // console.log(fileData)
        cb1(fileData);
        reader.readAsDataURL(fileData.data);
        reader.onload = function () {
            document = reader.result;
            cb2(document)
            // console.log(document)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

        return document
    }
};
