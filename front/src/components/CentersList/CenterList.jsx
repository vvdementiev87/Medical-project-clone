import React from 'react';
import styles from "./CenterList.module.scss";
import CenterListItem from "./CenterListItem";

const CenterList = ({centers}) => {
    console.log(centers);
    return (
        <div className={styles.centerList}>
            {centers.map((item, index) => (
                 <CenterListItem key={index} center={item} />
            ))}
        </div>
    );
};

export default CenterList;