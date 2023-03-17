import React from 'react';
import styles from './NewsBanner.module.scss';



const NewsBanner = ({text}) => {
    return (
        <div className={styles.marquee}><span>{text}</span></div>
    );
};

export default NewsBanner;