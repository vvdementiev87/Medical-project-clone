import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import styles from "./CenterList.module.scss";

const CenterListItem = ({center}) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.item}
        >
            <h4 className={styles.centerTitle}>{center.name}</h4>
            <NavLink to={`/centers/${center.id}`} className={styles.link} >Подробнее...</NavLink>
        </div>
    );
};

export default CenterListItem;