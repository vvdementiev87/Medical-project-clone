import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './ConferenceList.module.scss';

const ConferenceItem = ({conference}) => {
    const navigate = useNavigate();
    return (
        <div
            className={styles.item}
        >

            <img src={conference.image_url} alt={conference.id}/>
            <h4>{conference.title}</h4>
            <p>{conference.short_description}</p>
            <button onClick={() => {
                navigate(`/conferencies/${conference.id}`);
            }}><span>Подробнее</span></button>
        </div>
    );
};

export default ConferenceItem;
