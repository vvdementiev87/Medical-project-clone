import React from 'react';
import styles from './ConferenceList.module.scss';
import ConferenceItem from "./ConferenceItem";

const ConferenceList = ({ conferencies }) => {
    console.log(conferencies);
    return (
        <div className={styles.conferenceList}>
            {conferencies.map((item, index) => (
                <ConferenceItem key={index} conference={item} />
            ))}
        </div>
    );
};

export default ConferenceList;
