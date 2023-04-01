import axios from "axios";

export const base64 = {
    async getBase64(url,cb) {
        let document = "";
        let reader = new FileReader();
        const fileData= await axios.get(`/testDocs/${url}`, {
            responseType: 'blob',
        });
        reader.readAsDataURL(fileData.data);
        reader.onload = function () {
            document = reader.result;
            cb(document)
            // console.log(document)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };

        return document
    }
};
