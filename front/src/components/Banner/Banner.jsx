import React from 'react';
import styles from './Banner.module.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

const link = <FontAwesomeIcon icon={faArrowRight} />;

const Banner = ({data}) => {
    return (
        <div className={styles.bannerWrapper}  >
                <NavLink to={`/news/${data?.id}`}>
                    <h3>{data?.title}</h3>
                    <p>{data?.short_description}</p>
                    <button className={styles.link}>{link}</button>
                </NavLink>
            </div>

    );
};

export default Banner;