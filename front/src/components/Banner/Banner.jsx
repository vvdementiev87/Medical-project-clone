import React from 'react';
import styles from './Banner.module.scss';
import {NavLink} from "react-router-dom";

const Banner = ({data}) => {
    return (
        <div className={styles.bannerWrapper}  >
                <NavLink to={`/news/${data?.id}`}>
                    <h3>{data?.title}</h3>
                    <p>{data?.shortText}</p>
                </NavLink>
            </div>

    );
};

export default Banner;