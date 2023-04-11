import React, {useEffect, useState} from 'react';
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import {NormativesService} from "../../services/normatives.service";
import styles from './Normatives.module.scss';
import Loader from "../../components/Loader/Loader";
import {useNavigate} from "react-router-dom";


const Normatives = () => {
    const [docs, setDocs] = useState([]);
    const [error, setError] = useState(null);
    const navigate=useNavigate();

    useEffect(() => {
        try {
            NormativesService.getAll().then((res) => setDocs(res));
        } catch (error) {
            setError(error.message);
        }
    }, []);
    return docs.length < 1 ? (
            <Loader/>
        ) :
        (
            <div className="container">
                <h1 className={styles.heading}>{'Нормативно-правовые документы'}</h1>
                <ul className={styles.docsWrapper}>
                    {
                        docs&&docs.map((item,idx)=>(
                            <li key={item.id} onClick={() => {
                                navigate(`/normatives/${item.id}`);
                            }}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        );
};

export default Normatives;


