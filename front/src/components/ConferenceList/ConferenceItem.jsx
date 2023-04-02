import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ConferenceList.module.scss';

const ConferenceItem = ({conference}) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.item}
        >

            <img src={conference.image} alt={conference.id}/>
            <h4>{conference.name}</h4>
            <p>{conference.short_text}</p>
            <button onClick={() => {
                navigate(`/conferencies/${conference.id}`);
            }}><span>Подробнее</span></button>
        </div>
    );
};

export default ConferenceItem;
