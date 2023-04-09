import {Link, useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import styles from './ConferenceList.module.scss';
import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {ConferenciesService} from "../../services/conference.service";


const ConferenceBanner = ({conference}) => {
    // const navigate = useNavigate();

    return conference ? (<div>
        <div className="container">
            <div className={styles.profile}>
                <div className={styles.card}>
                    <img
                        src={conference?.image} alt={conference?.id}
                        className={styles.cardImage}/>
                    <div className={styles.cardContent}>
                        <span className={styles.cardTitle}>{conference?.name}</span>
                        <p className={styles.subTitle}>{conference?.place}</p>
                        <time dateTime={conference?.date_start}
                              className={styles.cardDate}>{conference?.date_start}</time>

                    </div>
                </div>
                <p className={styles.cardDescription}>{conference?.short_text}</p>
                <Link to={`/conferencies/${conference.id}`} className={styles.link}>Подробнее...</Link>

            </div>
        </div>
    </div>) : ''
}
export default ConferenceBanner;
