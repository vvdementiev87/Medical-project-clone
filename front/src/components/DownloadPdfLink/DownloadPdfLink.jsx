import React from 'react';
import axios from 'axios'
import fileDownload from 'js-file-download'
import styles from "./DownloadPdfLink.module.scss";

const DownloadPdfLink = ({url, text}) => {

    const handleDownload = () => {
        axios.get(`/testDocs/${url}`, {
            responseType: 'blob',
        })
            .then((res) => {
                console.log(res.data)
                fileDownload(res.data, url)
            })
    };

    return (
        <button onClick={() => {
            handleDownload()
        }} className={styles.programLink}>
            {text}
        </button>
    );
};

export default DownloadPdfLink;