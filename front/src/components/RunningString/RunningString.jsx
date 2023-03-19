import React from 'react';
import styles from './RunningString.module.scss';



const RunningString = ({text}) => {
    return (
        <div className={styles.marquee}><span>{text}</span></div>
    );
};

export default RunningString;