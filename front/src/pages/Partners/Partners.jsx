import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Virtumed from '../../assets/images/partners/Virtumed.png';
import Eidos from '../../assets/images/partners/Eidos.png';
import Impresa from '../../assets/images/partners/Impresa.png';
import styles from "./Partners.module.scss";
import Instagram from "../../assets/images/instagram.png";

const partners=[
    {
        preview:Virtumed,
        alt:"Virtumed",
        link:"https://virtumed.ru/"
    },
    {
        preview:Eidos,
        alt:"Eidos",
        link:"https://eidos-medicine.com/"
    },
    {
        preview:Impresa,
        alt:"Impresa",
        link:"https://impresaltd.com/"
    },
];

const Partners = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1 className={styles.heading}>{'Компании-партнеры'}</h1>
            <div className={styles.tree}>
                <ul>
                    {partners?.map((item,idx)=>(
                        <li key={idx}>
                            <div className={styles.partnerWrapper}>
                                <div className={styles.previewWrapper}><img src={item?.preview} alt={item?.alt}/></div>
                                <Link
                                    to={item?.link}
                                    rel="nofollow noopener noreferrer"
                                    target="_blank"
                                    className="everywhere-button"
                                >
                                  <span>{item?.link}</span>
                                </Link>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Partners;