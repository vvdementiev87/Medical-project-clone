import {Link, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import styles from './ConferenceList.module.scss';
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {ConferenciesService} from "../../services/conference.service";


const ConferenceBanner = ({conference}) => {
    const navigate = useNavigate();

    return (
        // (isLoading ? (
        // 	<h1>Loading...</h1>
        // ) : (
        <div>
            <div className="container">
                <div className={styles.profile}>
                    <div className={styles.card}>
                        <img
                            src={conference?.image_url} alt={conference?.id}
                            className={styles.cardImage}/>
                        <div className={styles.cardContent}>
                            <span className={styles.cardTitle}>{conference?.title}</span>
                            <p className={styles.subTitle}>{conference?.place}</p>
                            <time dateTime={conference?.date_start} className={styles.cardDate}>{conference?.date_start}</time>

                        </div>
                    </div>
                    <p className={styles.cardDescription}>{conference?.short_description}</p>
                    <Link to={`/conferencies/${conference.id}`} style={{color:'rgba(126,131,166,0.8)'}}>Подробнее...</Link>

                </div>
            </div>
        </div>
    );
};

export default ConferenceBanner;
